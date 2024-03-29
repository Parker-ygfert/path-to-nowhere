<template>
<div
  id="scroll-box"
  class="overflow-x-hidden overflow-y-scroll"
>
  <div class="main-box d-flex justify-content-center">
    <router-link :to="{
                    name: backTo(),
                    hash: `#${sinner.name}`
                  }"
                  class="tablet-show">
      <i class="bi bi-box-arrow-left float-start me-1 font-30"></i>
    </router-link>
  
    <div class="img-box w-fit me-md-3">
      <div class="sinner-img position-relative mx-auto">
        <SinnerImg :job="sinnerJob" :sinner="sinner" />
      </div>
      <div class="wiki-link h-fit my-3 text-center">
        <a :href="sinner?.wiki" target="_blank" class="align-middle font-16">
          Wiki
        </a>
      </div>

      <template v-for="tag in sinner?.tags">
        <div
          class="tag w-fit mx-auto px-3 rounded-pill text-center text-nowrap font-14 text-bg-dark"
          v-html="tag"
        >
        </div>
      </template>

      <template v-if="sinner.evaluations">
        <div class="eva-box text-center mt-3 mb-0">
          <a
            class="eva-link btn btn-outline-danger rounded-1 px-3 font-14"
            data-bs-toggle="collapse"
            href="#evaluationCollapse"
            role="button"
          >
            {{ $t('evaluations') }}
          </a>
        </div>
        <div class="collapse mt-3" id="evaluationCollapse">
          <template v-for="eva in sinner?.evaluations">
            <div class="mt-2 font-13 text-center">
              <a :href="eva.link" target="_blank">{{ eva.name }}</a>
            </div>
          </template>
        </div>
      </template>
    </div>
  
    <SinnerInfo :sinner="sinner" />
  
    <CrimeBrand :sinner="sinner" />
  </div>

  <Comment :sinner="sinner.name" />
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd.sass'

#scroll-box
  max-height: calc(calc(var(--vh, 1vh) * 100) - 165px)

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
    .eva-box
      margin-top: -0.1rem
      margin-bottom: -0.25rem
    .eva-link
      padding-top: 6px
      padding-bottom: 6px
      &[aria-expanded="true"]
        color: var(--bs-btn-hover-color)
        background-color: var(--bs-btn-hover-bg)
        border-color: var(--bs-btn-hover-border-color)
    .tag
      padding-top: 4px
      padding-bottom: 4px
      &:nth-child(n + 3)
        margin-top: 4px
</style>

<script setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import SinnerImg from './Sinner/Img'
import SinnerInfo from './Sinner/Info'
import CrimeBrand from './CrimeBrand'
import Comment from './Comment'
import jobs from '@/data/jobs.json'
import sinners from '@/data/sinners.json'

const route = useRoute()  
const sinnerJob = route.params.job
const sinnerName = route.params.name
let sinner = jobs[sinnerJob].find(({ name }) => name === sinnerName)
sinner = Object.assign(sinner, sinners[sinnerName])

onBeforeMount(() => {
  if (!sinner) location.href = `${import.meta.env.VITE_PATH}/homepage`
})

const backTo = () => {
  return location.pathname.split('/')[3]
}
</script>
