<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HomeView from './views/HomeView.vue';
import Heroes from './components/Heroes.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Navbar />
    <main>
        <HomeView />
    </main>
    <Footer />
</template>
