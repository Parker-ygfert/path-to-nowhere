<template>
  <div class="crime-brand-box d-flex">
    <div class="character-img position-relative me-3">
      <Character :job="job" :character="currentCharacter" />
    </div>

    <div class="cb-box overflow-auto">
      <div v-for="cb in currentCharacter.crimebrands"
           class="mb-1 font-20">
        <header class="font-30">{{ $t(cb.name) }}</header>

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
            <span class="crimebrands-name position-absolute font-14 fw-bold text-white">
              {{ $t(cbName) }}
            </span>
            <div class="rank-deco" :class="'deco-' + cbRank(cbName)"></div>
          </div>
        </div>

        <div>{{ cb.description }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@mixin tablet
  @media only screen and (max-width: 768px)   
    @content

.crime-brand-box
  @include tablet
    display: initial !important
  .character-img
    min-width: 180px
    width: 180px
    height: 270px
    @include tablet
      margin-bottom: 1rem
  .cb-box
    height: 80vh
    .crimebrands-img
      width: 100px
      height: 100px
      .crimebrands-name
        right: 4px
        bottom: 1px
        text-shadow: -1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000
      .rank-deco
        display: inline-block
        bottom: 0
        right: 0
        position: absolute
        pointer-events: none
        width: 98px
        height: 5px
      .deco-s
        background-image: linear-gradient(rgba(255,0,0,0),rgba(255,220,93,1) 75% )
      .deco-a
        background-image: linear-gradient(rgba(255,0,0,0),rgba(241,174,255,1) 75% )
      .deco-b
        background-image: linear-gradient(rgba(255,0,0,0),rgba(117,171,240,1) 75% )
</style>

<script setup>
import { useRoute } from 'vue-router'
import { getImageUrl } from '@/scripts/get_image_url.js'
import Character from './Character'
import sinners from '@/data/sinners.json'
import crimebrands from '@/data/crimebrands.json'

const route = useRoute()  
const job = route.params.job
const currentCharacter = sinners[job].find(({ name }) => name === route.params.name )
const cbRank = (cbName) => {
  let cb = crimebrands.find(({ name }) => name === cbName)
  return cb.rank
}
</script>
