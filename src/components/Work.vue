<script setup>
  import dataProjects from '../assets/projects.json'
</script>

<template>
  <section id="work">
    <div id="featuredProject">
      <h2 class="text-light mb-5 fw-bold"><span class="text-success font-monospace">03.</span> Some Things I’ve Built</h2>
      
      <div class="row"> 
        <div class="col-md-7">
          <div class="img-container">
            <img src="../assets/images/projects/kmob.jpeg" class="img-fluid" alt="...">
          </div>
        </div>
        <div class="col-md-5">
            <p class="font-monospace green tech">Featured Project</p>
            <h3 class="text-light">KMOB Depok</h3>
            <div class="card">
              <div class="card-body">
                <p class="card-text">KMOB is an Android and IOS based application that uses a mobile phone as a device and is designed to perform routine work such as attendance, requests for leave, permits, overtime and others. By using this application reporting is easy, and fully integrated. </p> 
                <p>To bring together more than 5,000 employees while working in offices, homes, and outside services, the <a href="https://bkpsdm.depok.go.id" target="_blank" rel="noreferrer"> Depok City Government</a> uses KMOB as the foundation and data center for employee work activities.</p>
                <p class="font-monospace green tech mb-2"> PHP | Lumen (Laravel) | Rest API</p>
              </div>
            </div>
            <a class="btn btn-outline-success" href="https://www.gravitasi.co.id/portfolio/kmob-pemda-depok/" target="_blank" rel="noreferrer">Learn More</a>
        </div>
      </div>

      <div class="row"> 
        <div class="col-md-7">
          <div class="img-container">
            <img src="../assets/images/projects/djangkep.png" class="img-fluid" alt="...">
          </div>
        </div>
        <div class="col-md-5">
            <p class="font-monospace green tech">Featured Project</p>
            <h3 class="text-light">Djangkep App</h3>
            <div class="card position-relative">
              <div class="card-body">
                <p class="card-text">Together with the <a href="https://commonroom.info" target="_blank" rel="noopener noreferrer">Common Room Networks Foundation</a>, we have developed a platform for Digital Village to facilitate citizen data collection services, delivery of digital letters to public complaints. Now we are preparing to launch at <a href="http://tembok-buleleng.desa.id" target="_blank" rel="noopener noreferrer">Tembok Village</a>.</p>
                <p class="font-monospace green tech mb-2"> PHP | Laravel | Rest API</p>
              </div>
            </div>
            <a class="btn btn-outline-success" href="https://djangkepapp.gravita.si" target="_blank" rel="noreferrer">Learn More</a>
        </div>
      </div>

      <div class="row"> 
        <div class="col-md-7">
          <div class="img-container">
            <img src="../assets/images/projects/mobooking.png" class="img-fluid" alt="...">
          </div>
        </div>
        <div class="col-md-5">
            <p class="font-monospace green tech">Featured Project</p>
            <h3 class="text-light">Mobooking</h3>
            <div class="card">
              <div class="card-body">
                <p class="card-text">Mobooking is an online business application to help small, medium and growing businesses make marketing, operational and customer management easier.</p>
                <p class="font-monospace green tech mb-2"> PHP | Laravel | Rest API</p>
              </div>
            </div>
            <a class="btn btn-outline-success" href="https://mobooking.id" target="_blank" rel="noreferrer">Learn More</a>
        </div>
      </div>

    </div>

    <div id="allProjects">
      <h3 class="text-light mb-5 fw-bold text-center">Other Noteworthy Projects</h3>
      <div class="row">
        <div class="col-md-4" v-for="data in projectsLoaded" :key="data.id">
          <a :href="data.url" target="_blank" rel="noreferrer">
            <div class="card" style="transition-delay: 100ms">
            <div class="card-body">
              <h5 class="card-title text-light">{{data.name}}</h5>
              <p class="card-text">{{data.description}}</p>
              <span v-for="tech in data.tech" class="font-monospace tech">{{ tech }} </span>
            </div>
          </div>
          </a>
        </div>
        <div class="text-center">
          <button  @click="loadMore" class="btn btn-outline-success btn-lg">Show More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return { 
        projects: dataProjects,
        length: 6,
        step: 3,
      }
    },
    methods: {    
      loadMore() {      
        if (this.length > this.projects.length) return;      
          this.length = this.length + this.step;   
      },  
    },  
    computed: {    
      projectsLoaded() {      
        return this.projects.slice(0, this.length);    
      },  
    },
  }
</script>