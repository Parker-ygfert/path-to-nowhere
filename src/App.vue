<template>
<div class="d-flex justify-content-end align-items-center mb-1 font-16">
  <span>{{ $t('language') }}</span>
  <select v-model="locale"
          class="form-select form-select-sm ms-1 font-14"
          aria-label="Default select example">
    <option>zh-TW</option>
    <option>en</option>
  </select>
</div>

<NavLink :key="$route.name" />
<router-view :key="$route.name" />
<ScrollTop />
</template>

<style lang="sass" scoped>
.form-select
  width: 90px
  padding: 5px 14px
  background-position: right 0.2rem center
  &:focus
    border-color: var(--bs-border-color)
    box-shadow: none
</style>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import NavLink from '@/components/NavLink'
import ScrollTop from '@/components/ScrollTop'

const { t, locale } = useI18n()

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})
</script>
