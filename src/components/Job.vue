<template>
<div
  id="scroll-box"
  class="job-box d-flex flex-wrap gap-1 m-auto overflow-scroll"
>
  <div v-for="sinner in currentSinners"
        :id="sinner.name"
        class="sinner-img position-relative">
    <router-link :to="{
                    name: 'sinner',
                    params: {
                      job: $route.name,
                      name: sinner.name
                    }
                  }">
      <SinnerImg :id="sinner.name" :job="$route.name" :sinner="sinner" />
    </router-link>
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd'

#scroll-box
  max-height: calc(calc(var(--vh, 1vh) * 100) - 165px)

.job-box
  max-width: 758px
.sinner-img
  width: 180px
  height: 270px
  @include tablet
    margin-left: auto
    margin-right: auto !important
</style>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '@/firebase/index.js'
// import { collection, getDocs } from 'firebase/firestore'
import SinnerImg from './Sinner/Img'
import jobs from '@/data/jobs.json'

const route = useRoute()
const currentSinners = jobs[route.name]

onMounted(() => {
  const sinner = route.query.sinner
  const sinnerElement = document.querySelector(`#${sinner}`)
  if (sinnerElement) sinnerElement.scrollIntoView()
})
</script>
