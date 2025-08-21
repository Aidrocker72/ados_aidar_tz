import { defineStore } from 'pinia'
import type { IFilters } from '@/interfaces/IFilters';
import type { ISession } from '@/interfaces/ISession';
import { formatSessionDate } from '@/utils/date';

export const useSessionStore = defineStore('session', {
  state: () => ({
    sessions: [] as ISession[],
    filters: { status: '', dateFrom: '', dateTo: '' } as IFilters,
    searchTerm: '',
    currentPage: 1,
    sortBy: '' as keyof ISession | '',
    sortDir: 'asc' as 'asc' | 'desc',
  }),
  getters: {
    filteredAndSortedSessions(state): ISession[] {
      let result = [...state.sessions]

      if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase()
        result = result.filter(s => s.module.toLowerCase().includes(term))
      }

      if (state.filters.status) {
        result = result.filter(s => s.status === state.filters.status)
      }
      if (state.filters.dateFrom) {
        result = result.filter(s => s.date >= state.filters.dateFrom)
      }
      if (state.filters.dateTo) {
        result = result.filter(s => s.date <= state.filters.dateTo)
      }


      if (state.sortBy) {
        result.sort((a, b) => {
          const valA = a[state.sortBy]
          const valB = b[state.sortBy]
          if (typeof valA === 'string') {
            return state.sortDir === 'asc'
              ? valA.localeCompare(valB as string)
              : (valB as string).localeCompare(valA)
          }
          return state.sortDir === 'asc' ? (valA as number) - (valB as number) : (valB as number) - (valA as number)
        })
      }

      return result
    },
    paginatedSessions(state): ISession[] {
      const start = (state.currentPage - 1) * 10
      const end = start + 10;
      return this.filteredAndSortedSessions.slice(start, end)
    },
    totalPages(): number {
      return Math.ceil(this.filteredAndSortedSessions.length / 10)
    },
  },
  actions: {
    setSearchTerm(term: string) {
      this.searchTerm = term
      this.currentPage = 1
    },
    setFilters(filters: Partial<IFilters>) {
      this.filters = { ...this.filters, ...filters }
      this.currentPage = 1
    },
    setSort(field: keyof ISession) {
      if (this.sortBy === field) {
        this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortBy = field
        this.sortDir = 'asc'
      }
    },
    setCurrentPage(page: number) {
      this.currentPage = page
    },
    addSession(session: Omit<ISession, 'id'>) {
      const newSession: ISession = { ...session, id: Date.now() }
      this.sessions.push(newSession)
    },
    async fetchSessions() {
      try {
        const response = await fetch('/api/sessions.json')
        if (!response.ok) throw new Error('Ошибка загрузки сессий')

        const rawData = await response.json()

        this.sessions = rawData.map((s: any) => ({
          id: s.id,
          module: s.module,
          status: s.status.name,
          date: formatSessionDate(s.start, s.end),
          count: s.groups?.length || 0,
          room: s.rooms[0]?.name || '-',
          responsible: s.rooms[0]?.responsible?.name || '-',
        }))
      } catch (error) {
        console.error('Не удалось загрузить сессии:', error)
      }
    },
  },
})