<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top" color-on-scroll="300">
      <div class="container-fluid">
        <div class="navbar-translate">
          <a class="navbar-brand text-success" href="https://rivan-codes.github.io/me" rel="tooltip" title="Rivan Nurdin" data-placement="bottom">
            Rivan Nurdin
          </a>
          <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <ul class="navbar-nav font-monospace">
            <li class="nav-item" style="transition-delay: 0ms">
              <a href="#about" class="nav-link"><span class="text-success">01. </span> About</a>
            </li>
            <li class="nav-item" style="transition-delay: 100ms">
              <a id="aWork" href="#jobs" class="nav-link"><span class="text-success">02. </span> Experience</a>
            </li>
            <li class="nav-item" style="transition-delay: 200ms">
              <a id="aContact" href="#work" class="nav-link"><span class="text-success">03. </span> Work</a>
            </li>
            <li class="nav-item" style="transition-delay: 300ms">
              <a id="aContact" href="#contact" class="nav-link"><span class="text-success">04. </span> Contact</a>
            </li>
            <li class="nav-item" style="transition-delay: 400ms">
              <button class="btn btn-outline-success" type="button">Resume</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
  
  <script>
  export default {
    name: 'navbar'
  }
  </script>