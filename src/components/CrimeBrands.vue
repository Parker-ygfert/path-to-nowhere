<template>
  <div class="character-img position-relative">
    <Character job="endura" :character="currentCharacter" />
  </div>

  <div v-for="cb in currentCharacter.crimebrands" class="font-20">
    <header class="font-30">{{ cb.name }}</header>
    <div class="d-flex">
      <div v-for="position in ['first', 'second', 'third']"
           :set="cbName = cb[position]"
           class="crimebrands-img position-relative flex-shrink-0 border border-dark">
        <img v-if="cbName"
             :src="getImageUrl(`crimebrands/${cbRank(cbName)}.png`)" alt=""
             class="position-absolute">
        <img v-if="cbName"
             :src="getImageUrl(`crimebrands/${cbName}.png`)" alt=""
             class="w-100 h-100">
        <span class="crimebrands-name position-absolute font-16 fw-bold text-white">
          {{ $t(cbName) }}
        </span>
      </div>

      <div>{{ cb.description }}</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.character-img
  width: 180px
  height: 270px
.crimebrands-img
  width: 100px
  height: 100px
  .crimebrands-name
    right: 4px
    bottom: 0
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000
</style>

<script setup>
import { useRoute } from 'vue-router'
import { getImageUrl } from '@/scripts/get_image_url.js'
import Character from './Character'
import endura from '@/data/endura.json'
import crimebrands from '@/data/crimebrands.json'

const route = useRoute()  
let currentCharacter = endura.find(({ name }) => name === route.params.name )
let cbRank = (cbName) => {
  let cb = crimebrands.find(({ name }) => name === cbName)
  return cb.rank
}
</script>
