<script setup>
  import iconInstagram from '../assets/icons/iconInstagram.vue';
  import iconGithub from '../assets/icons/iconGithub.vue';
  import iconLinkedin from '../assets/icons/iconLinkedin.vue';
  import iconMedium from '../assets/icons/iconMedium.vue';
  import iconStartup from '../assets/icons/iconStartup.vue';
</script>
<template>
  <div class="social">
    <ul>
      <li social-item><a href=""> <iconGithub /></a></li>
      <li social-item><a href=""> <iconInstagram /></a></li>
      <li social-item><a href=""> <iconLinkedin /></a></li>
      <li social-item><a href=""> <iconMedium /></a></li>
      <li social-item><a href=""> <iconStartup /></a></li>
    </ul>
  </div>
  
  <div class="email-right" orientation="left">
    <div email>
      <a href="mailto:rivannurdin001@gmail.com" class="font-monospace">rivannurdin001@gmail.com</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'social',
      components: {
        iconInstagram,
        iconGithub,
        iconLinkedin,
        iconMedium,
        iconStartup,
      }
    }
</script>