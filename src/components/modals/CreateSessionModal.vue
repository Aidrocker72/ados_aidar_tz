<template>
    <div class="modal-overlay" @click="emit('close')">
        <div class="modal" @click.stop>
            <h3 class="modal__title">Создать сессию</h3>
            <form @submit.prevent="submit" class="modal__form">
                <div class="modal__field">
                    <label>Модуль</label>
                    <input v-model="form.module" required />
                </div>
                <div class="modal__field">
                    <label>Статус</label>
                    <select v-model="form.status" required>
                        <option value="Активный">{{ sessionStatus.COMPLETED }}</option>
                        <option value="Завершён">{{ sessionStatus.CANCELED }}</option>
                        <option value="На паузе">{{ sessionStatus.PLANNED }}</option>
                    </select>
                </div>
                <div class="modal__field">
                    <label>Дата</label>
                    <input v-model="form.date" type="date" required />
                </div>
                <div class="modal__field">
                    <label>Количество</label>
                    <input v-model.number="form.count" type="number" required />
                </div>
                <div class="modal__actions">
                    <button type="button" @click="emit('close')" class="modal__btn">Отмена</button>
                    <button type="submit" class="modal__btn modal__btn_primary">Создать</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useSessionStore } from '@/stores/sessionStore';
import { SessionStatusEnum } from '@/enums/SessionStatusEnum';
import { IModalEmits } from '@/interfaces/emits/IModalEmits';

const store = useSessionStore()
const emit = defineEmits<IModalEmits>();
const sessionStatus = SessionStatusEnum;

const form = reactive({
    module: '',
    status: sessionStatus.COMPLETED,
    date: '',
    count: 0,
})

const submit = () => {
    store.addSession(form)
    emit('close')
}
</script>

<style lang="scss">
@use './Modal.scss';
</style>