<template>
    <div class="svg-sprite" v-html="spriteContent"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const spriteContent = ref('');

onMounted(async () => {
    try {
        const response = await fetch('/src/assets/icons/sprite.svg');
        if (!response.ok) throw new Error('SVG not loaded');
        spriteContent.value = await response.text();
    } catch (error) {
        console.error('Failed to load SVG sprite:', error);
    }
})
</script>

<style scoped>
.svg-sprite {
    width: 0;
    height: 0;
    position: absolute;
    pointer-events: none;
    display: none;
}
</style>