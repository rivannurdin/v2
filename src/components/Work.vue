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
            <img src="../assets/images/projects/mobooking.png" class="img-fluid" alt="...">
          </div>
        </div>
        <div class="col-md-5">
            <p class="font-monospace green tech">Featured Project</p>
            <h3 class="text-light">MoBooking</h3>
            <div class="card position-relative">
              <div class="card-body">
                <p class="card-text">KMOB is an Android and IOS based application that uses a mobile phone as a device and is designed to perform routine work such as attendance, requests for leave, permits, overtime and others. By using this application reporting is easy, and fully integrated.</p>
                <p class="font-monospace green tech mb-2"> PHP | Laravel | Rest API | Postman</p>
              </div>
            </div>
            <button class="btn btn-outline-success">Learn More</button>
        </div>
      </div>

      <div class="row"> 
        <div class="col-sm">
            <p class="font-monospace green tech">Featured Project</p>
            <h3 class="text-light">MoBooking</h3>
            <div class="card">
              <div class="card-body">
                <p class="card-text">KMOB is an Android and IOS based application that uses a mobile phone as a device and is designed to perform routine work such as attendance, requests for leave, permits, overtime and others. By using this application reporting is easy, and fully integrated.</p>
                <p class="font-monospace green tech mb-2"> PHP | Laravel | Rest API | Postman</p>
              </div>
            </div>
            <button class="btn btn-outline-success">Learn More</button>
        </div>
        <div class="col-sm">
          <div class="img-container">
            <img src="../assets/images/projects/mobooking.png" class="img-fluid" alt="...">
          </div>
        </div>
      </div>

      <div class="row"> 
        <div class="col-sm">
          <div class="img-container">
            <img src="../assets/images/projects/mobooking.png" class="img-fluid" alt="...">
          </div>
        </div>
        <div class="col-sm">
            <p class="font-monospace green tech">Featured Project</p>
            <h3 class="text-light">MoBooking</h3>
            <div class="card">
              <div class="card-body">
                <p class="card-text">KMOB is an Android and IOS based application that uses a mobile phone as a device and is designed to perform routine work such as attendance, requests for leave, permits, overtime and others. By using this application reporting is easy, and fully integrated.</p>
                <p class="font-monospace green tech mb-2"> PHP | Laravel | Rest API | Postman</p>
              </div>
            </div>
            <button class="btn btn-outline-success">Learn More</button>
        </div>
      </div>

    </div>

    <div id="allProjects">
      <h3 class="text-light mb-5 fw-bold text-center">Other Noteworthy Projects</h3>
      <div class="row">
        <div class="col-md-4" v-for="data in projectsLoaded" :key="data.id">
          <a href="">
            <div class="card" style="transition-delay: 100ms">
            <div class="card-body">
              <h5 class="card-title text-light">{{data.name}}</h5>
              <p class="card-text">{{data.description}}.</p>
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