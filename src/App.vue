<template>
  <div class="app">
    <svg-sprite />
    <Sidebar v-if="!isAuthPage" class="app__sidebar" />

    <main :class="['app__main', { 'app__main_full': isAuthPage }]">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import SvgSprite from './components/shared/SvgSprite.vue'
import Sidebar from './components/sidebar/Sidebar.vue';
import { computed } from 'vue';

const route = useRoute()
const isAuthPage = computed(() => route.path === '/')

</script>

<style lang="scss">
.app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  height: 100vh;
  background: #f5f6f8;
  display: flex;
  gap: 18px;

  &__main {
    flex: 1;
    background: #f8f9fa;

    &_full {
      padding: 0;
      margin: 0;
      width: 100%;
      min-height: 100vh;
    }
  }
}
</style>