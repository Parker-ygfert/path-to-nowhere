<template>
<div class="d-flex flex-wrap">
  <div v-for="character in fury" class="character-img position-relative me-1 mb-1">
    <router-link :to="{
      name: 'crime-brands',
      params: { name: character.name }
    }">
      <Character job="fury" :character="character" />
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
import Character from './Character'
import fury from '@/data/fury.json'
</script>
