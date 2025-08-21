<template>
    <table class="session-table">
        <thead>
            <tr>
                <th 
                    v-for="column in columns" 
                    :key="column.key" 
                    @click="column.sortable ? sort(column.key) : null"
                    :class="{ 
                        'session-table__sortable': column.sortable,
                        'session-table__header--module': column.key === 'module',
                    }" 
                    class="session-table__head"
                >
                    {{ column.label }}
                    <SortIcon v-if="column.sortable" :dir="iconDir(column.key)" />
                </th>
            </tr>

        </thead>
        <tbody>
            <tr v-for="(s, id) in paginated" :key="id" class="session-table__row">
                <td class="session-table__cell">{{ s.date }}</td>
                <td class="ession-table__cell session-table__status" :class="`status_${s.status.toLowerCase()}`">
                    <span>
                        {{ renderStatus(s.status) }}
                    </span>
                </td>
                <td class="session-table__cell session-table__cell--module">{{ s.module }}</td>
                <td lass="session-table__cell">{{ s.type }}</td>
                <td lass="session-table__cell">{{ s.room }}</td>
                <td>{{ s.group }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSessionStore } from '@/stores/sessionStore'
import type { ISession } from '@/interfaces/ISession'
import SortIcon from '@/components/shared/SortIcon.vue'
import { SESSION_STATUS_LABELS } from '@/constants/sessionStatusLabels';
import { SESSION_TABLE_COLUMNS } from '@/constants/tableColumns';

const store = useSessionStore();
const columns = SESSION_TABLE_COLUMNS;

const paginated = computed(() => store.paginatedSessions);

const sort = (field: keyof ISession) => store.setSort(field);
const iconDir = (field: keyof ISession) => {
    return store.sortBy === field ? store.sortDir : null
};

const renderStatus = (status: string) => {
    return SESSION_STATUS_LABELS[status as keyof typeof SESSION_STATUS_LABELS] || status;
};
</script>

<style lang="scss">
@use './SessionTable.scss';
</style>