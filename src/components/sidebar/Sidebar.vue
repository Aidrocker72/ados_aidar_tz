<template>
    <aside 
        :class="['sidebar', { 'sidebar_collapsed': collapsed }]">
        <div class="sidebar__logo">
            <img  src="/src/assets/LogoIcon.png"/>
            <div class="title" v-if="!collapsed">
                Сим Центр
            </div>
        </div>
        <nav class="sidebar__menu">
            <div 
                class="sidebar__item"
                v-for="{ icon, id, text, name } in sideBarItems" 

                :class="{'--active': route.name === name}"
                :key="id"
            >
                <SvgIcon :name="icon"/>
                <span class="sidebar__text" v-if="!collapsed">
                    {{ text }}
                </span>
            </div>
           

            <div class="sidebar__actions">
                <span class="sidebar__user"  v-if="!collapsed">
                    <div class="text">
                        <div class="name">
                            Барнаби Мармадюк
                        </div>
                        <div class="position">
                            Администратор
                        </div>
                    </div>
                    <div class="avatar">
                        БМ
                    </div>
                </span>
                <button 
                    @click="logout" 
                    class="sidebar__btn sidebar__item"
                >
                    <svg-icon name="logout" />
                    <span v-if="!collapsed">Выйти</span>
                </button>
            </div>
        </nav>
        <button @click="toggle" class="sidebar__collapse-btn">
            <svg-icon name="arrow" class="icon__arrow"/>
        </button>
    </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SvgIcon from '@/components/shared/SvgIcon.vue';
import { useRoute, useRouter } from 'vue-router';
import { SIDEBAR_ITEMS } from '@/constants/sideBarItems';

const route = useRoute();
const router = useRouter();

const collapsed = ref(false);
const sideBarItems = ref(SIDEBAR_ITEMS);

const toggle = () => {
    collapsed.value = !collapsed.value;
    localStorage.setItem('sidebarCollapsed', String(collapsed.value));
};

const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
};

console.log(router)

onMounted(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    collapsed.value = saved === 'true';
});
</script>

<style lang="scss">
@use './Sidebar.scss';
</style>