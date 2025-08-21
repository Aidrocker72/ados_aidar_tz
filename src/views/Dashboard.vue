<template>
    <div class="dashboard">
        <div class="dashboard__main">
            <Header @create="showCreate = true" @filter="showFilter = true" />

            <div class="dashboard__content">
                <SessionTable />
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
    max-height: 100vh;
    height: 100%;
    background: #f8f9fa;

    &__main {
        flex: 1;
        padding: 20px;
        background: #ffff;
    }

    &__content {
        max-width: 1200px;
        margin: 0 auto;
    }

   
}
</style>