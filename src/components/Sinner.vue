<template>
  <div class="crime-brand-box d-flex">
    <router-link :to="{
                   name: backTo(),
                   query: { sinner: route.params.name }
                 }">
      <i class="bi bi-box-arrow-left float-start me-1 font-30"></i>
    </router-link>

    <div class="character-img position-relative me-1 me-lg-2">
      <CharacterImg :job="job" :character="sinner" />
    </div>

    <div class="info-box mt-1 me-1 me-lg-2 font-16">
      <table width="100%" class="table table-sm table-bordered mb-1">
        <thead align="center">
          <tr>
            <th scope="col" colspan="2">{{ $t('overall_strength') }}</th>
          </tr>
        </thead>
        <tbody align="center">
          <template v-for="strength in sinner.strength">
            <tr>
              <td>{{ $t(strength.map) }}</td>
              <td>{{ decode(strength.strength) }}</td>
            </tr>
          </template>
        </tbody>
      </table>

      <table width="100%" class="table table-sm table-bordered mb-1">
        <thead align="center">
          <tr>
            <th scope="col">{{ $t('skill') }}</th>
            <th scope="col">{{ $t('upgrade_order') }}</th>
            <th scope="col">{{ $t('recommended_grade') }}</th>
          </tr>
        </thead>
        <tbody align="center">
          <template v-for="skill in sinner.skills">
            <tr>
              <th scope="row" class="px-2">{{ skill.skill}}</th>
              <td>{{ skill.order}}</td>
              <td :class="{ 'fw-bold text-danger' : skill.threshold }">{{ skill.level}}</td>
            </tr>
          </template>
        </tbody>
        <caption v-if="sinner.skill_des" class="pt-0">{{ sinner.skill_des }}</caption>
      </table>
    </div>

    <div class="cb-box">
      <div class="text-center font-30">—— {{ $t('crimebrands_recommends') }} ——</div>
      <div v-for="cb in sinner.crimebrands"
            class="cb-set mb-1 font-18">
        <header class="font-20 text-primary">{{ $t(cb.name) }}</header>
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
        <div class="text-secondary">{{ cb.description }}</div>
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
      margin-bottom: .25rem
      margin-left: auto
      margin-right: auto !important
  .info-box
    @include tablet
      margin-left: auto !important
      margin-right: auto !important
      max-width: 300px
  .cb-box
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

.table
  &.table-sm
    flex-grow: 0
    flex-shrink: 0
    flex-basis: 300px
    th, td
      padding-top: .1rem
      padding-bottom: .1rem
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
const sinner = sinners[job].find(({ name }) => name === route.params.name )

const cbRank = cbName => {
  let cb = crimebrands.find(({ name }) => name === cbName)
  return cb.rank
}

const backTo = () => {
  return location.pathname.split('/')[3]
}

const decode = html => {
  const decoder = document.createElement('div')
  decoder.innerHTML = html
  return decoder.textContent
}
</script>
