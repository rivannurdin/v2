<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HomeView from './views/HomeView.vue';
import Heroes from './components/Heroes.vue';
import Footer from './components/Footer.vue';
import Social from './components/Social.vue';
</script>

<template>
    <Navbar />
    <Social />
    <main>
        <HomeView />
    </main>
    <Footer />
</template>
