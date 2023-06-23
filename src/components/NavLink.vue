<template>
<header class="mb-3">
  <ul class="nav nav-tabs flex-nowrap border-bottom border-secondary overflow-x-scroll overflow-y-hidden">
    <li v-for="link in links"
        :id="link"
        class="nav-item font-12">
      <router-link
        :to="{
          name: link,
        }"
        class="nav-link px-2 py-1 px-md-3 py-md-2 font-20"
        :class="{ active: isActive(link) }">
        {{ $t(`nav.${link}`) }}
      </router-link>
    </li>

    <li ref="dropdown">
      <a
        ref="dropdownBtn"
        href="javascript:void(0)"
        id="other"
        class="nav-link dropdown-btn border-0 px-2 py-1 px-md-3 py-md-2 font-20"
        :class="{ active: isActiveOther() }"
        data-bs-toggle="dropdown"
        data-bs-offset="0, -1"
      >
        {{ $t('other.other') }}
      </a>
      <div class="dropdown-menu min-w-fit mt-0 p-0 font-20" >
        <template v-for="link in otherLinks">
          <template v-if="link === 'pool'">
            <router-link
              :id="link"
              :to="{
                name: link,
                hash: poolLink()
              }"
              class="d-block px-3 py-1">
              {{ $t(`nav.${link}`) }}
            </router-link>
          </template>
          <template v-else>
            <router-link
              :to="{
                name: link,
              }"
              class="d-block px-3 py-1">
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
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import jobs from '@/data/jobs.json'
import pools from '@/data/pools.json'

const route = useRoute()
const links = ['homepage', ...Object.keys(jobs)]
const otherLinks = ['pool', 'guide']
const dropdown = ref(null)
const dropdownBtn = ref(null)

onMounted(() => {
  dropdownBtn.value.addEventListener('hide.bs.dropdown', e => {
    if (e.currentTarget.matches('.active')) {
      e.preventDefault()
    }
  })

  dropdown.value.addEventListener('mouseover', () => {
    dropdownBtn.value.classList.add('active')
    dropdownBtn.value.click()
  })
  dropdown.value.addEventListener('mouseout', () => {
    dropdownBtn.value.classList.remove('active')
    dropdownBtn.value.click()
  })

  if (otherLinks.includes(route.name)) {
    dropdownBtn.value.classList.add('active')
  }

  const job = route.path.split('/').find(el => links.includes(el))
  const linkId = job ? job : 'other'
  const link = document.querySelector(`#${linkId}`)
  if (link) link.scrollIntoView({ block: 'nearest' })
})

const isActive = route => {
  return location.pathname.includes(route)
}

const isActiveOther = () => {
  return location.pathname.split('/').some(r => otherLinks.includes(r))
}

const poolLink = () => {
  const current = new Date().getTime()

  const currentPool = pools.find(({ start, end }) => {
    let poolStart = new Date(start).getTime()
    let poolEnd = new Date(end).getTime()

    return current >= poolStart && current <= poolEnd
  })

  return `#${currentPool.genre}_${currentPool.name}`
}
</script>
