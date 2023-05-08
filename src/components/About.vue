<template>
  <section id="about">
    <div class="row">
      <h2 class="text-light mb-5 fw-bold"><span class="text-success font-monospace">01.</span> About Me</h2>
      <div class="col-7">
        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p> Fast-forward to today, and I’ve had the privilege of working at an advertising agency, <a href="">a start-up</a>, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div class="row">
          <div class="col-6">
            <li class="text-success">PHP</li>
            <li class="text-success">Node JS</li>
            <li class="text-success">Python</li>
          </div>

          <div class="col-6">
            <li class="text-success">Laravel</li>
            <li class="text-success">Expressjs</li>
            <li class="text-success">FastAPI</li>
          </div>
        </div>
      </div>
      <div class="col-5 p-3 mt-5">
        <div class="img-container mt-3">
          <img src="../assets/me.jpeg" class="img-thumbnail" alt="...">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'about'
  }
</script>