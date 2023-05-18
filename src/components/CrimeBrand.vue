<template>
<div class="cb-box">
  <div class="text-center font-30">
    —— {{ $t('crimebrands_recommends') }} ——
    <div class="font-12 text-danger">紅色表示通用性較高</div>
  </div>
  <div class="cb-formula">
    <div
      v-for="cb in sinner?.crimebrands"
      class="cb-set my-1 font-18"
    >
      <header class="font-20" :class="{ 'text-danger' : cb.emphasis }">
        ◎{{ $t(cb.name) }}
      </header>
      <div class="d-flex">
        <div
          v-for="position in ['first', 'second', 'third']"
          :set="cbName = cb[position]"
          class="crimebrands-img position-relative flex-shrink-0 border border-dark"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :data-position="position"
          :data-cb-name="cbName"
          :data-bs-title="cbName"
          data-bs-html="true"
        >
          <img
            v-if="cbName"
            :src="getImageUrl(`crimebrands/${cbRank(cbName)}.png`)"
            alt=""
            loading="lazy"
            class="position-absolute"
          >
          <img
            v-if="cbName"
            :src="getImageUrl(`crimebrands/${cbName}.png`)"
            alt=""
            loading="lazy"
            class="w-100 h-100"
          >
          <span class="crimebrands-name position-absolute font-14 fw-bold text-white">
            {{ $t(`crimebrands.${cbName}`) }}
          </span>
          <div class="rank-deco" :class="'deco-' + cbRank(cbName)"></div>
        </div>
      </div>
      <div
        class="text-secondary"
        v-html="cb.description"
      >
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd.sass'

.cb-set
  width: 300px !important
  @include tablet
    width: fit-content
    margin: auto
  .crimebrands-img
    width: 100px
    height: 100px
    .crimebrands-name
      right: 4px
      bottom: 1px
      text-shadow: -1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000
    .rank-deco
      display: inline-block
      bottom: 0
      right: 0
      position: absolute
      pointer-events: none
      width: 98px
      height: 5px
    .deco-s
      background-image: linear-gradient(rgba(255,0,0,0),rgba(255,220,93,1) 75% )
    .deco-a
      background-image: linear-gradient(rgba(255,0,0,0),rgba(241,174,255,1) 75% )
    .deco-b
      background-image: linear-gradient(rgba(255,0,0,0),rgba(117,171,240,1) 75% )
</style>

<script setup>
import { onMounted } from 'vue'
import { getImageUrl } from '@/scripts/get_image_url.js'
import { Tooltip } from 'bootstrap'
import crimebrands from '@/data/crimebrands.json'

onMounted(() => {
  const cbBoxes = document.querySelectorAll('.crimebrands-img')
  cbBoxes.forEach(cbBox => {
    const cb = crimebrand(cbBox.dataset.cbName, cbBox.dataset.position)
    const tooltip = new Tooltip(cbBox, {
      title: `${cb.attributes}<br>${cb.set_bonus}` || ""
    })
  })
})

const props = defineProps({
  sinner: Object
})

const sinner = props.sinner

const crimebrand = (cbName, cbPosition) => {
  if (cbPosition) {
    return crimebrands.find(({ name, position }) => name === cbName && position == cbPosition)
  } else {
    return crimebrands.find(({ name }) => name === cbName)
  }
}

const cbRank = cbName => {
  let cb = crimebrand(cbName)
  return cb.rank
}
</script>
