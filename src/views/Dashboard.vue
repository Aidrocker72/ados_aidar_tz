<template>
    <div class="dashboard">
        <div class="dashboard__main">
            <Header @create="showCreate = true" @filter="showFilter = true" />

            <div class="dashboard__content">
                <div class="table-wrapper">
                    <SessionTable />
                </div>

                <Pagination />
            </div>
        </div>
        <CreateSessionModal v-if="showCreate" @close="showCreate = false" />
        <FilterModal v-if="showFilter" @close="showFilter = false" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '@/components/header/Header.vue'
import SessionTable from '@/components/session-table/SessionTable.vue';
import Pagination from '@/components/pagination/Pagination.vue';
import CreateSessionModal from '@/components/modals/CreateSessionModal.vue'
import FilterModal from '@/components/modals/FilterModal.vue'
import { useSessionStore } from '@/stores/sessionStore';

const store = useSessionStore()

onMounted(() => {
    store.fetchSessions()
})

const showCreate = ref(false)
const showFilter = ref(false)
</script>

<style lang="scss">
.dashboard {
    display: flex;
    min-height: 100vh;
    background: #f8f9fa;

    &__main {
        flex: 1;
        padding: 20px;
        background: var(--color-white);
    }

    &__content {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 140px);
    }

    .table-wrapper {
        flex: 1;
        overflow-y: auto;
        height: 600px;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        &::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 3px;
        }
    }
}
</style>