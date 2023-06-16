<template>
<div class="font-20">
  <div class="text-center fw-bold">
    —— {{ $t('pool.info') }} ——
  </div>

  <div
    id="scroll-box"
    class="pool-box mt-3 overflow-scroll"
  >
    <table class="table table-bordered border-secondary mb-0 text-nowrap">
      <tbody>
        <tr
          v-for="pool in pools"
          :id="`${pool.name}`"
          align="center"
          valign="middle"
          :class="{ 'current-pool bg-orange-100': isCurrentArrest(pool) }"
        >
          <td class="td-flexing p-0">
            <img
              :src="getImageUrl(`pool/${pool.genre}/${pool.name}.png`)"
              alt=""
              loading="lazy"
              class="w-100"
            >
          </td>

          <td
            align="center"
            class="pool-detail td-flexing"
          >
            <div>
              {{ $t(`pool.${pool.name}`) }}
              <span
                class="pool-genre"
                :class="poolGenreColor(pool.genre)"
              >
                {{ $t(`pool.${pool.genre}`) }}
              </span>
            </div>

            <div class="pool-time mt-1 font-14">
              {{ pool.start }}
            </div>
            <div
              v-if="pool.end"
              class="pool-time -my-1 font-14"
            >
              ~
            </div>
            <div class="pool-time font-14">
              {{ pool.end }}
            </div>

            <div class="d-grid justify-content-center my-3">
              <div
                v-for="up in pool.ups"
                :key="up.name"
                class="pool-up g-col-3 p-0 border border-dark"
                :class="pool.genre"
              >
                <router-link :to="{
                              name: 'sinner',
                              params: {
                                job: up.job,
                                name: up.name,
                              }
                              }">
                  <img
                    :set="sinner = currentSinner(up)"
                    :src="getImageUrl(`avatar/${sinner.name}.png`)"
                    alt=""
                    class="avatar"
                    :class="`rank-${sinner?.rank}`"
                  >
                </router-link>
              </div>
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
  .td-flexing
    @include mobile
      display: block

.pool-box
  max-height: calc(calc(var(--vh, 1vh) * 100) - 228px)
  .pool-detail, .pool-ups
    @include mobile
      padding: 8px
  .pool-detail
    @include mobile
      min-width: 100px
    .pool-time
      @include mobile
        font-size: 12px !important
  .pool-ups
    min-width: 180px
    padding: .25rem
    @include mobile
      min-width: 0
      white-space: nowrap !important
  .pool-up
    width: 60px
    height: 60px
    .avatar
      width: 100%
      &.rank-S
        background-image: linear-gradient(to bottom, #ffaf3f, transparent 20%, transparent 80%, #ffaf3f)
      &.rank-A
        background-image: linear-gradient(to bottom, #bc6fff, transparent 20%, transparent 80%, #bc6fff)
      &.rank-B
        background-image: linear-gradient(to bottom, transparent 85%, #43a3fe)

.d-grid
  grid-auto-flow: column
  grid-column-gap: 2px
</style>

<script setup>
import { getImageUrl } from '@/scripts/get_image_url.js'
import pools from '@/data/pools.json'
import jobs from '@/data/jobs.json'

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
    case 'collective':
      return 'text-success'
  }
}

const isCurrentArrest = pool => {
  const current = new Date().getTime()
  const poolStart = new Date(pool.start).getTime()
  const poolEnd = new Date(pool.end).getTime()

  return current >= poolStart && current <= poolEnd
}

const currentSinner = up => {
  let data = jobs[up.job].find(({ name }) => name == up.name )

  return  { ...up, ...data }
}
</script>
