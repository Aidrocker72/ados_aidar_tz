<template>
    <div class="modal-overlay" @click="$emit('close')">
        <div class="modal" @click.stop>
            <h3 class="modal__title">Фильтры</h3>
            <form @submit.prevent="apply" class="modal__form">
                <div class="modal__field">
                    <label>Тип сессии</label>
                    <select v-model="localFilters.type">
                        <option value="">Все</option>
                        <option :value="SessionTypeEnum.LESSON">
                            {{ SESSION_TYPE_LABELS[SessionTypeEnum.LESSON] }}
                        </option>
                        <option :value="SessionTypeEnum.EXAMINATION">
                            {{ SESSION_TYPE_LABELS[SessionTypeEnum.EXAMINATION] }}
                        </option>
                        <option :value="SessionTypeEnum.ACCREDITATION">
                            {{ SESSION_TYPE_LABELS[SessionTypeEnum.ACCREDITATION] }}
                        </option>
                    </select>
                </div>
                <div class="modal__field">
                    <label>Статус</label>
                    <select v-model="localFilters.status">
                        <option value="">Все</option>
                        <option :value="SessionStatusEnum.PLANNED">
                            {{ SESSION_STATUS_LABELS[SessionStatusEnum.PLANNED] }}
                        </option>
                        <option :value="SessionStatusEnum.IN_PROGRESS">
                            {{ SESSION_STATUS_LABELS[SessionStatusEnum.IN_PROGRESS] }}
                        </option>
                        <option :value="SessionStatusEnum.COMPLETED">
                            {{ SESSION_STATUS_LABELS[SessionStatusEnum.COMPLETED] }}</option>
                        <option :value="SessionStatusEnum.CANCELED">
                            {{ SESSION_STATUS_LABELS[SessionStatusEnum.CANCELED] }}</option>
                    </select>
                </div>
                <div class="modal__field">
                    <label>Название модуля</label>
                    <input v-model="localFilters.module" placeholder="Поиск..." />
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
import { computed } from 'vue'
import { useSessionStore } from '@/stores/sessionStore'
import { IModalEmits } from '@/interfaces/emits/IModalEmits';
import { SessionStatusEnum } from '@/enums/SessionStatusEnum';
import { SessionTypeEnum } from '@/enums/SessionTypeEnum';
import { SESSION_TYPE_LABELS } from '@/constants/sessionTypeLabel';
import { SESSION_STATUS_LABELS } from '@/constants/sessionStatusLabels';

const store = useSessionStore()
const emit = defineEmits<IModalEmits>()

const localFilters = computed( () => ({ ...store.filters }))

const apply = () => {
    store.setFilters(localFilters.value);
    emit('close');
}
</script>

<style lang="scss">
@use './Modal.scss';
</style>