<template>
<header>
  <ul class="nav nav-tabs flex-nowrap">
    <li v-for="job in jobs" class="nav-item">
      <router-link to="`/${job}`" class="nav-link p-1 font-20">{{ job }}</router-link>
    </li>
  </ul>
</header>

<router-view/>
</template>

<style lang="sass" scoped>
.nav-link
  text-transform: capitalize
</style>

<script setup>
const jobs = ['endura', 'fury', 'umbra', 'reticle', 'arcane', 'catalyst']
</script>
