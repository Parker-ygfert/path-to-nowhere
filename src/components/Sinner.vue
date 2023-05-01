<template>
<div
  id="scroll-box"
  class="overflow-scroll"
>
  <div class="main-box d-flex justify-content-center">
    <router-link :to="{
                    name: backTo(),
                    query: { sinner: route.params.name }
                  }"
                  class="tablet-show">
      <i class="bi bi-box-arrow-left float-start me-1 font-30"></i>
    </router-link>
  
    <div class="img-box w-fit me-1 me-lg-2">
      <div class="sinner-img position-relative mx-auto">
        <SinnerImg :job="job" :sinner="sinner" />
      </div>
      <div class="wiki-link h-fit my-1 text-center">
        <a :href="sinner?.wiki" target="_blank" class="align-middle font-16">
          Wiki
        </a>
      </div>

      <template v-for="tag in sinner?.tags">
        <div
          class="tag w-fit mx-auto px-1 rounded-pill text-center text-nowrap font-14 text-bg-dark"
          v-html="tag"
        >
        </div>
      </template>

      <!--
      <template v-for="eva in sinner?.evaluations">
        <div class="font-13 text-center">
          <a :href="eva.link" target="_blank">{{ eva.link }}</a>
        </div>
      </template>
      -->
    </div>
  
    <SinnerInfo :sinner="sinner" />
  
    <CrimeBrand :sinner="sinner" />
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd.sass'

#scroll-box
  max-height: calc(100vh - 165px)

.main-box
  @include tablet
    display: initial !important
  .bi-box-arrow-left
    @include tablet
      margin: 0 !important
  .img-box
    @include tablet
      width: auto !important
    .wiki-link
      line-height: 16px
    .sinner-img
      min-width: 180px
      width: 180px
      height: 270px
      @include tablet
        margin-left: auto
        margin-right: auto !important
    .tag
      padding-top: 4px
      padding-bottom: 4px
      &:nth-child(n + 3)
        margin-top: 4px
</style>

<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { getImageUrl } from '@/scripts/get_image_url.js'
import SinnerImg from './SinnerImg'
import SinnerInfo from './SinnerInfo'
import CrimeBrand from './CrimeBrand'
import sinners from '@/data/sinners.json'

const route = useRoute()  
const job = route.params.job
const sinner = sinners[job].find(({ name }) => name === route.params.name )

onBeforeMount(() => {
  if (!sinner) location.href = `${import.meta.env.VITE_PATH}/homepage`
})

onMounted(() => {
  window.scroll(0, 0)
})

const backTo = () => {
  return location.pathname.split('/')[3]
}
</script>
