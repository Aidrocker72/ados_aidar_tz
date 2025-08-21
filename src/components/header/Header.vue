<template>
    <header class="header">
        <h2 class="header__title">Учебные сессий</h2>

        
        <div class="header__left">
            <SearchBar />
            <button 
                @click="emit('filter')" 
                class="header__btn"
            >
                <svg-icon name="filter" />
            </button>
            <button 
                @click="emit('create')" 
                class="header__btn__primary"
            >
                Создать
            </button>
        </div>
       
    </header>
</template>

<script setup lang="ts">
import { IHeaderEmits } from '@/interfaces/emits/IHeaderEmits';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import SvgIcon from '../shared/SvgIcon.vue';

const emit = defineEmits<IHeaderEmits>()
</script>

<style lang="scss">
@use './Header.scss';
</style>