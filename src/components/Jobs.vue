<script setup>
  import dataJobs from '../assets/jobs.json'
</script>

<template>
  <section id="jobs">
    <h2 class="text-light mb-5 fw-bold"><span class="text-success font-monospace">02.</span> Where I’ve Worked</h2>
    <div class="row">

      <div class="col-md-4 mb-3">
        <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
          <li class="nav-item" v-for="data in dataJobs" :key="data.id">
            <a v-on:click="activetab=data.id" v-bind:class="[ activetab === data.id ? 'active' : '' ]" class="nav-link">{{ data.company }}</a>
          </li>
        </ul>
      </div>
      <div class="col-md-8">
        <div class="tab-content" id="myTabContent">
          <div v-for="data in dataJobs" :key="data.id">
            <div class="tab-pane fade show active" id="job1" role="tabpanel" aria-labelledby="job1-tab"  v-if="activetab ===data.id">
              <p class="text-light"><strong>{{data.position}}</strong> <span class="green"><strong>@ </strong></span><a href="{{ data.url }}" target="_blank" rel="noreferrer"><strong>{{data.company}}</strong></a></p>
              <p class="font-monospace font-14">{{data.year}}</p>
              <ul>
                  <li v-for="task in data.task">
                    <p>{{task}}</p>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'jobs',
    data() {
      return { 
        activetab: '1',
      }
    },
  }

  // new Vue({

  // })
</script>