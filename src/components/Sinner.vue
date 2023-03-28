<template>
  <div class="crime-brand-box d-flex">
    <router-link :to="{
                   name: backTo(),
                   query: { sinner: route.params.name }
                 }">
      <i class="bi bi-box-arrow-left float-start me-1 font-30"></i>
    </router-link>

    <div class="character-img position-relative me-3">
      <CharacterImg :job="job" :character="currentCharacter" />

      <table class="pc-show table table-sm table-bordered mx-auto mt-3 w-fit h-fit font-16">
        <thead align="center">
          <tr>
            <th scope="col">{{ $t('skill') }}</th>
            <th scope="row">{{ $t('upgrade_order') }}</th>
            <th scope="row">{{ $t('recommended_grade') }}</th>
          </tr>
        </thead>
        <tbody align="center">
          <template v-for="skill in currentCharacter.skills">
            <tr>
              <th scope="col" class="px-2">{{ skill.skill}}</th>
              <td scope="col">{{ skill.order}}</td>
              <td scope="col" :class="{ 'fw-bold text-danger' : skill.threshold }">{{ skill.level}}</td>
            </tr>
          </template>
        </tbody>
        <caption class="pt-0">{{ currentCharacter.skill_des }}</caption>
      </table>
    </div>

    <div>
      <table class="tablet-show table table-sm table-bordered mx-auto mb-2 w-fit h-fit font-16">
        <thead align="center">
          <tr>
            <th scope="col" class="text-nowrap">{{ $t('skill') }}</th>
            <template v-for="skill in currentCharacter.skills">
              <th scope="col" class="px-2">{{ skill.skill}}</th>
            </template>
          </tr>
        </thead>
        <tbody align="center">
          <tr>
            <th scope="row" class="text-nowrap">{{ $t('upgrade_order') }}</th>
            <template v-for="skill in currentCharacter.skills">
              <td scope="col">{{ skill.order}}</td>
            </template>
          </tr>
          <tr>
            <th scope="row" class="text-nowrap">{{ $t('recommended_grade') }}</th>
            <template v-for="skill in currentCharacter.skills">
              <td scope="col" :class="{ 'fw-bold text-danger' : skill.threshold }">{{ skill.level}}</td>
            </template>
          </tr>
        </tbody>
        <caption class="pt-0">{{ currentCharacter.skill_des }}</caption>
      </table>

      <div class="cb-box h-fit overflow-auto">
        <div v-for="cb in currentCharacter.crimebrands"
             class="cb-set mb-1 font-20">
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
  </div>
</template>

<style lang="sass" scoped source="../assets/styles/style.sass">
@import '@/assets/styles/_rwd.sass'

.crime-brand-box
  @include tablet
    display: initial !important
  .bi-box-arrow-left
    @include tablet
      margin: 0 !important
  .character-img
    min-width: 180px
    width: 180px
    height: 270px
    @include tablet
      margin-bottom: 1rem
      margin-left: auto
      margin-right: auto !important
  .cb-box
    height: 80vh
    @include tablet
      overflow: unset !important
    .cb-set
      width: 300px !important
      @include tablet
        width: fit-content
        margin: auto
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
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getImageUrl } from '@/scripts/get_image_url.js'
import CharacterImg from './CharacterImg'
import sinners from '@/data/sinners.json'
import crimebrands from '@/data/crimebrands.json'

onMounted(() => {
  window.scroll(0, 0)
})

const route = useRoute()  
const job = route.params.job
const currentCharacter = sinners[job].find(({ name }) => name === route.params.name )

const cbRank = cbName => {
  let cb = crimebrands.find(({ name }) => name === cbName)
  return cb.rank
}

const backTo = () => {
  return location.pathname.split('/')[3]
}
</script>
