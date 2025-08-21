<template>
    <span 
        class="sort-icon" 
        :class="`sort-icon_direction_${dir}`"
    >
        {{ dir === 'asc' ? '↑' : dir === 'desc' ? '↓' : '↕' }}
    </span>
</template>

<script setup lang="ts">
import { ISortIconProps } from '@/interfaces/props/ISortIconProps';

defineProps<ISortIconProps>()
</script>

<style lang="scss">
.sort-icon {
    font-size: 0.8em;
    margin-left: 4px;
    opacity: 0.6;

    &_direction_asc,
    &_direction_desc {
        opacity: 1;
    }
}
</style>