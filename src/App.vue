<template>
<div class="d-flex justify-content-end align-items-center pb-1 font-16">
  <span>{{ $t('language') }}</span>
  <select
    v-model="locale"
    class="form-select form-select-sm dropdown-toggle ms-1 font-14"
    data-bs-toggle="dropdown"
  >
    <option value="zh-TW" class="d-none">繁體中文</option>
    <option value="en" class="d-none">English</option>
  </select>
  <ul class="dropdown-menu dropdown-menu-end min-w-fit rounded-1 font-14">
    <li>
      <button
        role="option"
        value="en"
        class="dropdown-item"
        type="button"
        @click="switchLocale"
      >
        English
      </button>
    </li>
    <li>
      <button
        role="option"
        value="zh-TW"
        class="dropdown-item"
        type="button"
        @click="switchLocale"
      >
        繁體中文
      </button>
    </li>
  </ul>
</div>

<NavLink :key="$route.name" />
<router-view :key="$route.name" />
<ScrollTop />
</template>

<style lang="sass" scoped>
.form-select
  width: 106px
  padding: 5px 14px
  background-position: right 0.2rem center
  &:focus
    border-color: var(--bs-border-color)
    box-shadow: none

.dropdown-menu
  padding: 6px 10px !important
  .dropdown-item
    padding: 4px 10px !important
</style>

<script setup>
import { watch, onUpdated } from 'vue'
import { useI18n } from 'vue-i18n'
import NavLink from '@/components/NavLink'
import ScrollTop from '@/components/ScrollTop'

const { t, locale } = useI18n()

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
  document.documentElement.lang = newLocale
})

const switchLocale = e => {
  locale.value = e.target.value
}

onUpdated(() => {
  const tooltips = document.querySelectorAll('.tooltip')
  for (let tooltip of tooltips) tooltip.remove()
})
</script>
