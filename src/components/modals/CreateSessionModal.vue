<template>
    <div class="modal-overlay" @click="emit('close')">
        <div class="modal" @click.stop>
            <h3 class="modal__title">Создать сессию</h3>
            <form @submit.prevent="submit" class="modal__form">
                <div class="modal__field">
                    <label>Название модуля</label>
                    <input v-model="form.module" required />
                </div>
                <div class="modal__field">
                    <label>Тип сессии</label>
                    <select v-model="form.type">
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
                    <label>Дата и время начала</label>
                    <input v-model="form.start" type="datetime-local" required />
                </div>

                <div class="modal__field">
                    <label>Дата и время окончания</label>
                    <input v-model="form.end" type="datetime-local" required />
                </div>

                <div class="modal__field">
                    <label>Комната</label>
                    <select v-model="form.room">
                        <option>413</option>
                        <option>412</option>
                        <option>414</option>
                    </select>
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
import { SESSION_TYPE_LABELS } from '@/constants/sessionTypeLabel';
import { SessionTypeEnum } from '@/enums/SessionTypeEnum';
import { formatDate } from '@/utils/formatDate';

const store = useSessionStore()
const emit = defineEmits<IModalEmits>();

const form = reactive({
    module: '',
    type: SessionTypeEnum.LESSON,
    status: SessionStatusEnum.PLANNED,
    start: '',
    end: '',
    room: '413',
})

const submit = () => {
    const newSession = {
        id: Date.now(),
        module: form.module,
        type: SESSION_TYPE_LABELS[form.type as SessionTypeEnum],
        status: form.status as SessionStatusEnum,
        date: `${formatDate(form.start)} - ${formatTime(form.end)}`,
        room: form.room,
        group: 'Группа 1',
        responsible: 'Курткобейн Бондарчук',
    }

    store.sessions.unshift(newSession)
    emit('close')
}


const formatTime = (datetime: string) => {
    if (!datetime) return ''
    const d = new Date(datetime)
    return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
}
</script>

<style lang="scss">
@use './Modal.scss';
</style>