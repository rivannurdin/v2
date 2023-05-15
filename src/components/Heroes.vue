<template>
  <section id="heroes">
    {{ instargram }}
      <i class="bi bi-0-circle"></i>
      <div style="transition-delay: 100ms">
        <p class="text-success font-monospace">Hi, my name is</p>
      </div>
      <div style="transition-delay: 100ms">
        <h1 class="big-heading text-light fw-bold">Rivan Nurdin.</h1>
      </div>
      <div style="transition-delay: 100ms">
        <h1 class="big-heading">I like coding and cigarettes.</h1>
      </div>
      <div class="col-sm-7 mb-5" style="transition-delay: 100ms">
        <p>I’m a backend engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="http://" target="_blank" rel="noopener noreferrer">Gravitasi</a>.</p>
      </div>

      <a href="#work" class="btn btn-outline-success btn-lg">Check out my work!</a>
  </section>
</template>

<script>
  export default {
    name: 'heroes'
  }
</script>