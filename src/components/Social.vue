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
      <li social-item><a href="https://github.com/rivan-codes" target="_blank" rel="noopener noreferrer"> <iconGithub /></a></li>
      <li social-item><a href="https://www.instagram.com/rebahanism_" target="_blank" rel="noopener noreferrer"> <iconInstagram /></a></li>
      <li social-item><a href="https://www.linkedin.com/in/rivannurdin" target="_blank" rel="noopener noreferrer"> <iconLinkedin /></a></li>
      <li social-item><a href="https://rebahanisme.medium.com" target="_blank" rel="noopener noreferrer"> <iconMedium /></a></li>
      <li social-item><a href="https://djangkepapp.gravita.si" target="_blank" rel="noopener noreferrer"> <iconStartup /></a></li>
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