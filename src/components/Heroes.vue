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
        <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
      </div>
      <button class="btn btn-outline-success btn-lg" type="button">Check out my course!</button>
  </section>
</template>

<script>
  export default {
    name: 'heroes'
  }
</script>