<template>
    <div class="pagination">
      <button
        :disabled="current === 1"
        @click="changePage(current - 1)"
        class="pagination__btn pagination__btn_prev"
      >
        <SvgIcon name="arrow" />
      </button>
      <button
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
        :class="['pagination__btn', { 'pagination__btn_active': page === current }]"
      >
        {{ page }}
      </button>
      <button
        :disabled="current === total"
        @click="changePage(current + 1)"
        class="pagination__btn pagination__btn__next"
      >
        <SvgIcon name="arrow" />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useSessionStore } from '@/stores/sessionStore';
import SvgIcon from '../shared/SvgIcon.vue';
  
  const store = useSessionStore();
  
  const current = computed(() => store.currentPage);
  const total = computed(() => store.totalPages);
  const pages = computed(() => Array.from({ length: total.value }, (_, i) => i + 1));
  
  const changePage = (page: number) => {
    if (page >= 1 && page <= total.value) {
      store.setCurrentPage(page)
    }
  };
  </script>

  <style lang="scss">
  @use './Pagination.scss';
  </style>