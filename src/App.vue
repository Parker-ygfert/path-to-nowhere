<template>
<div class="font-16">
  <select v-model="locale">
    <option>zh-TW</option>
    <option>en</option>
  </select>
</div>

<header class="mb-2" @click=reRender()>
  <ul class="nav nav-tabs flex-nowrap">
    <li v-for="job in jobs" class="nav-item">
      <router-link
        :to="{ name: job }"
        class="nav-link p-1 font-20"
        :class="{ active: isActive(job) }">
        {{ $t(`${job}`) }}
      </router-link>
    </li>
  </ul>
</header>

<router-view />
</template>

<style lang="sass" scoped>
.nav-link
  text-transform: capitalize
</style>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})

const jobs = ['endura', 'fury', 'umbra', 'reticle', 'arcane', 'catalyst']
const isActive = (job) => {
  return job == window.location.pathname.replace('/', '')
}
</script>

<script>
export default {
  methods: {
    reRender() {
      this.$forceUpdate()
    }
  }
}
</script>
