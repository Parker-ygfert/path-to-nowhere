<template>
<div v-for="name in characters.endura">
  <lazyload-img :src="getImageUrl(`endura/${name}.png`)" alt="" />
  {{name}}
</div>
</template>

<style lang="sass" scoped>
</style>

<script setup>
import { getImageUrl } from '@/scripts/get_image_url.js'

const characters = {
  endura: ['OwO', 'Demon', 'Kawa-Kawa', 'Cinnabar', 'Countess Chelsea', 'Demolia', 'Peggy', 'KK']
}
</script>