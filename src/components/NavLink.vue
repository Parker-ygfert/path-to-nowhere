<template>
<header class="mb-1">
  <ul class="nav nav-tabs flex-nowrap border-bottom border-secondary overflow-x-scroll overflow-y-hidden">
    <li v-for="link in links"
        :id="link"
        class="nav-item">
      <template v-if="link === 'pool'">
        <router-link
          :to="{
            name: link,
            hash: poolLink()
          }"
          class="nav-link px-1 font-20"
          :class="{ active: isActive(link) }">
          {{ $t(`nav.${link}`) }}
        </router-link>
      </template>
      <template v-else>
        <router-link
          :to="{
            name: link,
          }"
          class="nav-link px-1 font-20"
          :class="{ active: isActive(link) }">
          {{ $t(`nav.${link}`) }}
        </router-link>
      </template>
    </li>
  </ul>
</header>
</template>

<style lang="sass" scoped>
.nav
  &::-webkit-scrollbar
    display: none

.nav-link
  padding-top: .1rem
  padding-bottom: .1rem
  text-transform: capitalize
  word-break: keep-all
  &.active
    border-top-left-radius: var(--bs-border-radius-sm)
    border-top-right-radius: var(--bs-border-radius-sm)
    background-color: var(--bs-dark) !important
    color: white
</style>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import jobs from '@/data/jobs.json'
import pools from '@/data/pools.json'

const route = useRoute()
const links = ['homepage', 'pool', 'guide']
links.splice.apply(links, [2, 0].concat(Object.keys(jobs)))

onMounted(() => {
  const job = route.path.split('/').find(el => links.includes(el))
  if (!job) return

  const link = document.querySelector(`#${job}`)
  if (link) link.scrollIntoView({ block: 'nearest' })
})

const isActive = route => {
  return location.pathname.includes(route)
}

const poolLink = () => {
  const current = new Date().getTime()

  const currentPool = pools.find(({ start, end }) => {
    let poolStart = new Date(start).getTime()
    let poolEnd = new Date(end).getTime()

    return current >= poolStart && current <= poolEnd
  })

  return `#${currentPool.name}`
}
</script>
