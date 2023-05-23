<template>
<header class="mb-1">
  <ul class="nav nav-tabs flex-nowrap border-bottom border-secondary overflow-x-scroll overflow-y-hidden">
  <!-- <ul class="nav nav-tabs flex-nowrap border-bottom border-secondary"> -->
    <li v-for="link in links"
        :id="link"
        class="nav-item font-12">
      <router-link
        :to="{
          name: link,
        }"
        class="nav-link px-1 font-20"
        :class="{ active: isActive(link) }">
        {{ $t(`nav.${link}`) }}
      </router-link>
    </li>

    <li ref="dropdown">
      <a
        ref="dropdownBtn"
        href="javascript:void(0)"
        class="nav-link dropdown-btn border-0 px-1 font-20"
        data-bs-toggle="dropdown"
        data-bs-offset="0, -1"
      >
        {{ $t('other.other') }}
      </a>
      <div
        ref="dropdownMenu"
        class="dropdown-menu min-w-fit p-0 font-20"
      >
        <template v-for="link in otherLinks">
          <template v-if="link === route.name">
            <a href="javascript:void(0)">
              {{ $t(`nav.${link}`) }}
            </a>
          </template>
          <template v-if="link === 'pool'">
            <router-link
              :id="link"
              :to="{
                name: link,
                hash: poolLink()
              }"
              class="d-block px-2">
              {{ $t(`nav.${link}`) }}
            </router-link>
          </template>
          <template v-else>
            <router-link
              :to="{
                name: link,
              }"
              class="d-block px-2"
              :class="{ active: isActive(link) }">
              {{ $t(`nav.${link}`) }}
            </router-link>
          </template>
        </template>
      </div>
    </li>
  </ul>
</header>
</template>

<style lang="sass" scoped>
.nav
  &::-webkit-scrollbar
    display: none

.nav-link
  padding-top: .2rem
  padding-bottom: .1rem
  border-top-left-radius: var(--bs-border-radius-sm)
  border-top-right-radius: var(--bs-border-radius-sm)
  text-transform: capitalize
  word-break: keep-all
  &:hover, &.active
    background-color: var(--bs-dark) !important
    color: white

.dropdown-btn
  line-height: 32px

.dropdown-menu
  border-radius: unset
  border-color: var(--bs-dark)
  a
    padding-top: .1rem
    padding-bottom: .1rem
    text-decoration: none
    &:hover
      background: var(--bs-dark)
      color: white
</style>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'
import jobs from '@/data/jobs.json'
import pools from '@/data/pools.json'

const route = useRoute()
const links = ['homepage', ...Object.keys(jobs)]
// links.splice.apply(links, [2, 0].concat(Object.keys(jobs)))
// const links = Object.keys(jobs)
const otherLinks = ['pool', 'guide']
const dropdown = ref(null)
const dropdownBtn = ref(null)
const dropdownMenu = ref(null)

onMounted(() => {
  // dropdownBtn.value.click()
  dropdown.value.addEventListener('mouseover', () => {
    dropdownBtn.value.click()
    dropdownBtn.value.classList.add('active')
  })
  dropdown.value.addEventListener('mouseout', () => {
    dropdownBtn.value.click()
    dropdownBtn.value.classList.remove('active')
  })

  if (otherLinks.includes(route.name)) {
    dropdownBtn.value.classList.add('active')
  }

  // dropdownMenu.value.addEventListener('mouseout', () => {
  //   dropdownBtn.value.click()
  // })

  const job = route.path.split('/').find(el => links.includes(el))
  if (job) {
    const link = document.querySelector(`#${job}`)
    if (link) link.scrollIntoView({ block: 'nearest' })
  }
})

// onUpdated(() => {
//   dropdown.value.addEventListener('mouseover', () => {
//     console.log(1234);
//     dropdownBtn.value.click()
//     dropdownBtn.value.classList.add('active')
//   })
//   dropdown.value.addEventListener('mouseout', () => {
//     dropdownBtn.value.click()
//     dropdownBtn.value.classList.remove('active')
//   })
// })

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

console.log(route);
</script>
