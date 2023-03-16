<template>
<div class="d-flex flex-wrap">
  <div v-for="character in characters"
       :id="character.name"
       class="character-img position-relative me-1 mb-1">
    <router-link :to="{
                   name: 'crime-brands',
                   params: {
                     job: $route.name,
                     name: character.name
                   }
                 }">
      <Character :id="character.name" :job="$route.name" :character="character" />
    </router-link>
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd'

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
import Character from './Character'
import sinners from '@/data/sinners.json'

const route = useRoute()
const characters = sinners[route.name]

onMounted(() => {
  const sinner = route.query.sinner
  if (sinner) {
    setTimeout(() => {
      location.hash = sinner
    }, 100)
  }
});
</script>
