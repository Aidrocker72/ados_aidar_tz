<template>
    <svg :class="['svg-icon', `svg-icon_${name}`]" :style="{ width: size, height: size }">
        <use :href="`#icon-${name}`" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
import { ISvgIconProps } from '@/interfaces/props/ISvgIconProps';

const {size = '24px', name, color = 'currentColor'} = defineProps<ISvgIconProps>()
</script>

<style scoped>
.svg-icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    stroke: none;
}
</style>