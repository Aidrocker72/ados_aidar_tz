<template>
    <input 
        v-model="search" 
        @input="onSearch" 
        type="text" 
        class="search-bar"
        placeholder="Поиск" 
    />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useSessionStore } from '@/stores/sessionStore';

const store = useSessionStore();
const search = ref(store.searchTerm);

const onSearch = () => {
    store.setSearchTerm(search.value);
};

watch(
    () => store.searchTerm,
    (newVal) => {
        search.value = newVal
    }
)
</script>

<style lang="scss">
@use './SearchBar.scss';
</style>