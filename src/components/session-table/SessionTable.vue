<template>
    <table class="session-table">
        <thead>
            <tr>
                <th @click="sort('module')" class="session-table__head">
                    Модуль
                    <SortIcon :dir="iconDir('module')" />
                </th>
                <th @click="sort('status')" class="session-table__head">
                    Статус
                    <SortIcon :dir="iconDir('status')" />
                </th>
                <th @click="sort('date')" class="session-table__head">
                    Дата
                    <SortIcon :dir="iconDir('date')" />
                </th>
                <th class="session-table__head">
                    Количество
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(s, id) in paginated" :key="id" class="session-table__row">
                <td>{{ s.module }}</td>
                <td>{{ s.status }}</td>
                <td>{{ s.date }}</td>
                <td>{{ s.count }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSessionStore } from '@/stores/sessionStore'
import type { ISession } from '@/interfaces/ISession'
import SortIcon from '@/components/shared/SortIcon.vue'

const store = useSessionStore();

const paginated = computed(() => store.paginatedSessions);

const sort = (field: keyof ISession) => store.setSort(field);
const iconDir = (field: keyof ISession) => {
    return store.sortBy === field ? store.sortDir : null
};
</script>

<style lang="scss">
@use './SessionTable.scss';
</style>