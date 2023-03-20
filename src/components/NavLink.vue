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

onMounted(() => {
  const job = location.pathname.split('/')[2]
  const link = document.querySelector(`#${job}`)
  if (link) link.scrollIntoView({ block: 'nearest' })
})

const links = ['homepage', 'endura', 'fury', 'umbra', 'reticle', 'arcane', 'catalyst']

const isActive = route => {
  return route == location.pathname.split('/').at(-1)
}
</script>
