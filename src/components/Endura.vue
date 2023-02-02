<template>
<div class="d-flex flex-wrap">
  <div v-for="character in endura" class="character-img position-relative me-1 mb-3">
    <Character job="endura" :character="character" />
  </div>
</div>
</template>

<style lang="sass" scoped>
.character-img
  width: 180px
  height: 270px
</style>

<script setup>
import { getImageUrl } from '@/scripts/get_image_url.js'
import Character from './Character'
import endura from '@/data/endura.json'
</script>
