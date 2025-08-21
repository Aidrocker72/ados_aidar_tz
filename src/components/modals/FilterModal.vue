<template>
    <div class="modal-overlay" @click="$emit('close')">
        <div class="modal" @click.stop>
            <h3 class="modal__title">Фильтры</h3>
            <form @submit.prevent="apply" class="modal__form">
                <div class="modal__field">
                    <label>Статус</label>
                    <select v-model="localFilters.status">
                        <option value="">Все</option>
                        <option :value="sessionStatus.COMPLETED">{{ sessionStatus.COMPLETED }}</option>
                        <option :value="sessionStatus.CANCELED">{{ sessionStatus.CANCELED }}</option>
                        <option :value="sessionStatus.PLANNED">{{ sessionStatus.PLANNED }}</option>
                    </select>
                </div>
                <div class="modal__field">
                    <label>Дата от</label>
                    <input v-model="localFilters.dateFrom" type="date" />
                </div>
                <div class="modal__field">
                    <label>Дата до</label>
                    <input v-model="localFilters.dateTo" type="date" />
                </div>
                <div class="modal__actions">
                    <button type="button" @click="$emit('close')" class="modal__btn">Отмена</button>
                    <button type="submit" class="modal__btn modal__btn_primary">Применить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useSessionStore } from '@/stores/sessionStore'
import type { IFilters } from '@/interfaces/IFilters';
import { IModalEmits } from '@/interfaces/emits/IModalEmits';
import { SessionStatusEnum } from '@/enums/SessionStatusEnum';

const store = useSessionStore()
const emit = defineEmits<IModalEmits>()
const sessionStatus = SessionStatusEnum;

const localFilters = reactive<IFilters>({
    status: store.filters.status,
    dateFrom: store.filters.dateFrom,
    dateTo: store.filters.dateTo,
})

const apply = () => {
    store.setFilters(localFilters);
    emit('close');
}
</script>

<style lang="scss">
@use './Modal.scss';
</style>