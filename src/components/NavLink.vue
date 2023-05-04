<template>
<header class="mb-1">
  <ul class="nav nav-tabs flex-nowrap border-bottom border-secondary overflow-x-scroll overflow-y-hidden">
    <li v-for="link in links"
        :id="link"
        class="nav-item">
      <router-link
        :to="{ name: link }"
        class="nav-link p-1 font-20"
        :class="{ active: isActive(link) }">
        {{ $t(`nav.${link}`) }}
      </router-link>
    </li>
  </ul>
</header>
</template>

<style lang="sass" scoped>
.nav-link
  text-transform: capitalize
  word-break: keep-all
  &.active
    border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity))
</style>

<script setup>
import { onMounted } from 'vue'
import jobs from '@/data/jobs.json'

onMounted(() => {
  const job = location.pathname.split('/')[2]
  if (!job) return

  const link = document.querySelector(`#${job}`)
  if (link) link.scrollIntoView({ block: 'nearest' })
})

const links = ['homepage', 'pool'].concat(Object.keys(jobs))

const isActive = route => {
  return route == location.pathname.split('/').at(-1)
}
</script>
