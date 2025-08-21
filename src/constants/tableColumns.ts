import { TableColumnType } from '@/types/TableColumnType'

export const SESSION_TABLE_COLUMNS: TableColumnType[] = [
    { key: 'date', label: 'Дата', sortable: true },
    {
        key: 'status',
        label: 'Статус',
        sortable: false,
    },
    { key: 'module', label: 'Название учебного модуля', sortable: false },
    { key: 'type', label: 'Тип сессии', sortable: false },
    { key: 'room', label: 'Комната', sortable: false },
    { key: 'group', label: 'Группа', sortable: false },
]