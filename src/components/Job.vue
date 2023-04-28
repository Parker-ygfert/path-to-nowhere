<template>
<div
  id="scroll-box"
  class="job-box d-flex flex-wrap gap-1 m-auto overflow-scroll"
>
  <div v-for="character in characters"
        :id="character.name"
        class="character-img position-relative">
    <router-link :to="{
                    name: 'sinner',
                    params: {
                      job: $route.name,
                      name: character.name
                    }
                  }">
      <SinnerImg :id="character.name" :job="$route.name" :character="character" />
    </router-link>
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd'

#scroll-box
  max-height: calc(100vh - 165px)

.job-box
  max-width: 758px
.character-img
  width: 180px
  height: 270px
  @include tablet
    margin-left: auto
    margin-right: auto !important
</style>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SinnerImg from './SinnerImg'
import sinners from '@/data/sinners.json'

const route = useRoute()
const characters = sinners[route.name]

onMounted(() => {
  const sinner = route.query.sinner
  const sinnerElement = document.querySelector(`#${sinner}`)
  if (sinnerElement) sinnerElement.scrollIntoView()
})
</script>
