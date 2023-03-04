<template>
<div class="d-flex flex-wrap">
  <div v-for="character in characters" class="character-img position-relative me-1 mb-1">
    <router-link :to="{
                   name: 'crime-brands',
                   params: {
                     job: $route.name,
                     name: character.name
                   }
                 }">
      <Character :job="$route.name" :character="character" />
    </router-link>
  </div>
</div>
</template>

<style lang="sass" scoped>
.character-img
  width: 180px
  height: 270px
</style>

<script setup>
import { useRoute } from 'vue-router'
import Character from './Character'
import sinners from '@/data/sinners.json'

const route = useRoute()
const characters = sinners[route.name]
</script>
