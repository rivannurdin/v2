<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HomeView from './views/HomeView.vue';
import Heroes from './components/Heroes.vue';

</script>

<template>
    <Navbar />
    <main>
        <HomeView />
    </main>
</template>
