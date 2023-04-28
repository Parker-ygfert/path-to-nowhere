<template>
<div class="mt-2 font-20">
  <div class="text-center fw-bold">
    —— {{ $t('pool.info') }} ——
  </div>

  <div
    id="scroll-box"
    class="pool-box mt-1 overflow-scroll"
  >
    <table class="table table-bordered border-secondary mb-0 text-nowrap">
      <tbody>
        <tr
          v-for="pool in pools"
          :class="{ 'bg-orange-100': pool.current }"
          align="center"
          valign="middle"
        >
          <td class="p-0">
            <img
              :src="getImageUrl(`pool/${pool.name}.png`)"
              alt=""
              loading="lazy"
              class="w-100"
            >
          </td>
          <td class="pool-detail">
            <div>
              {{ $t(`pool.${pool.name}`) }}
            </div>
            <div
              class="pool-genre mt-1"
              :class="poolGenreColor(pool.genre)"
            >
              {{ $t(`pool.${pool.genre}`) }}
            </div>
            <div class="pool-time mt-1 font-14">
              {{ pool.start }}
            </div>
            <div
              v-if="pool.end"
              class="pool-time font-14"
            >
              ~
            </div>
            <div class="pool-time font-14">
              {{ pool.end }}
            </div>
          </td>
          <td class="pool-ups py-1">
            <div
              v-for="up in pool.ups"
              class="pool-up"
              :class="pool.genre"
            >
              <router-link :to="{
                            name: 'sinner',
                            params: {
                              job: up.job,
                              name: up.name
                            }
                          }">
                {{ $t(`sinner.${up.name}`) }}
              </router-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd'

.table
  @include mobile
    white-space: break-spaces !important

.pool-box
  max-height: calc(100vh - 228px)
  @include mobile
    font-size: 12px
  .pool-detail, .pool-ups
    @include mobile
      padding: 8px
  .pool-detail
    @include mobile
      min-width: 100px
    div
      @include mobile
        margin-top: 0 !important
    .pool-time
      @include mobile
        font-size: 12px !important
  .pool-ups
    min-width: 180px
    @include mobile
      min-width: 0
      white-space: nowrap !important
    .pool-up
      &:nth-child(n+2)
        margin-top: .25rem
        @include mobile
          margin-top: 0
</style>

<script setup>
import { getImageUrl } from '@/scripts/get_image_url.js'
import pools from '@/data/pool.json'

const sinnerPath = string => {
  return `${import.meta.env.VITE_PATH}/sinner/${string}`
}

const poolGenreColor = genre => {
  switch (genre) {
    case 'exclusive':
      return 'purple-500'
    case 'event':
      return 'text-danger'
    case 'routine':
      return 'blue-400'
    case 'combine':
      return 'text-success'
  }
}
</script>
