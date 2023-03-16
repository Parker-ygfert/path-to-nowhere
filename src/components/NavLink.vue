<template>
<header class="mb-2">
  <ul class="nav nav-tabs flex-nowrap overflow-x-scroll overflow-y-hidden">
    <li v-for="link in links"
        :id="link"
        class="nav-item">
      <router-link
        :to="{ name: link }"
        class="nav-link p-1 font-20"
        :class="{ active: isActive(link) }">
        {{ $t(link) }}
      </router-link>
    </li>
  </ul>
</header>
</template>

<style lang="sass" scoped>
.nav-link
  text-transform: capitalize
  word-break: keep-all
</style>

<script setup>
import { onMounted } from 'vue'
import sinners from '@/data/sinners.json'

onMounted(() => {
  const job = location.pathname.split('/')[2]
  if (!location.hash) {
    setTimeout(() => {
      location.hash = job
    }, 100);
  }
})

let links = Object.keys(sinners)
links.unshift('homepage')

const isActive = route => {
  return route == location.pathname.split('/').at(-1)
}
</script>
