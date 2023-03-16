<template>
  <div>
    <img :src="getImageUrl(`${props.job}/${character.name}.png`)" alt="" class="w-100 h-100">
    <div :class="`rank-bar-${character.rank}`" class="rank-bar position-absolute overflow-hidden"></div>
    <div class="job-bg position-absolute overflow-hidden" :class="character.core ? 'core-bg' : 'normal-bg'">
      <div class="job-img position-absolute overflow-hidden">
        <img :src="getImageUrl(`jobs/${job}.png`)" alt="" class="w-100 h-100">
      </div>
    </div>
    <div class="footer-bg position-absolute overflow-hidden"></div>
    <div class="rank-img position-absolute">
      <img :src="getImageUrl(`ranks/${character.rank}.png`)" alt="" class="w-100 h-100">
    </div>
    <div class="character-name position-absolute text-white font-18 fw-bold">{{ $t(`${character.name}`) }}</div>
  </div>
</template>

<style lang="sass" scoped>
.rank-bar
  width: 90px
  height: 10px
  top: 2px
  right: 20px
  &.rank-bar-S
    border-top: 2px solid #ffaf3f
  &.rank-bar-A
    border-top: 2px solid #bc6fff
  &.rank-bar-B
    border-top: 2px solid #43a3fe
.job-bg
  width: 34px
  height: 34px
  top: 14px
  right: 20px
  &.core-bg
    background: linear-gradient(to top, #fb445b 1%, #bcd0f9 65%)
  &.normal-bg
    background: linear-gradient(to top, #bcd0f9, #bcd0f9 65%)
  .job-img
    top: -26px
    left: 0
.footer-bg
  width: 170px
  height: 70px
  left: 2px
  bottom: 4px
  background: linear-gradient(to top,black, transparent)
.rank-img
  width: 40px
  left: 12px
  bottom: 0
.character-name
  right: 14px
  bottom: 6px
</style>


<script setup>
import { getImageUrl } from '@/scripts/get_image_url.js'

const props = defineProps({
  job: String,
  character: Object
})
const character = props.character
</script>
