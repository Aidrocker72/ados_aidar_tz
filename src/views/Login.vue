<template>
    <div class="login">
        <div class="login__card">
            <h2 class="login__title">Вход в систему</h2>
            <form @submit.prevent="handleLogin" class="login__form">
                <div class="login__field">
                    <label>Логин</label>
                    <input v-model="form.login" type="text" placeholder="Введите логин" required />
                </div>
                <div class="login__field">
                    <label>Пароль</label>
                    <input v-model="form.password" type="password" placeholder="Введите пароль" required />
                </div>
                <button type="submit" class="login__btn">
                    Войти
                </button>
                <div v-if="error" class="login__error">
                    {{ error }}
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
    login: '',
    password: '',
})

const error = ref('')

const handleLogin = () => {
    if (form.value.login === 'admin' && form.value.password === '123') {
        localStorage.setItem('authToken', 'true')
        router.push('/dashboard')
    } else {
        error.value = 'Неверный логин или пароль'
    }
}
</script>

<style lang="scss">
.login {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;

    &__card {
        background: white;
        width: 100%;
        max-width: 400px;
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    &__title {
        text-align: center;
        padding: 30px 30px 20px;
        font-size: 24px;
        color: #333;
        margin: 0;
    }

    &__form {
        padding: 20px 30px;
    }

    &__field {
        margin-bottom: 20px;

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #333;
            font-size: 14px;
        }

        input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 14px;
            transition: border 0.2s;

            &:focus {
                outline: none;
                border-color: #007bff;
            }
        }
    }

    &__btn {
        width: 100%;
        padding: 12px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #0069d9;
        }
    }

    &__error {
        margin-top: 15px;
        padding: 10px;
        background: #f8d7da;
        color: #721c24;
        border-radius: 6px;
        font-size: 14px;
        text-align: center;
    }
}
</style>