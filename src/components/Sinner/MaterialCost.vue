<template>
<div>
  <!-- Button trigger modal -->
  <button
    type="button"
    :id="`cost-${sinner}`"
    class="btn btn-primary d-none"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  ></button>
  
  <!-- Modal -->
  <div class="modal modal-dialog-centered fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body position-relative p-0">
          <canvas ref="canvasBg" width="767" height="575" class="position-absolute top-0 start-0"></canvas>
          <canvas ref="canvasMain" width="767" height="575" class="position-absolute top-0 start-0"></canvas>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.modal
  z-index: -1
  &.show
    z-index: 9999
.modal-dialog
  max-width: fit-content
.modal-body
  width: 767px
  height: 575px
</style>

<script setup>
import { onMounted, ref } from 'vue'
import { getImageUrl } from '@/scripts/get_image_url.js'

const canvas = ref(null)
const canvasBg = ref(null)
const canvasMain = ref(null)

onMounted(() => {
  const ctxBg = canvasBg.value.getContext('2d')
  const ctxMain = canvasMain.value.getContext('2d')
  // const demoImg = new Image()
  const bgImg = new Image()
  const rankUpImg = new Image()
  const detentionImg = new Image()
  const mbccNumber = document.createElement('div')

  // demoImg.addEventListener(
  //   'load',
  //   () => {
  //     ctxMain.scale(0.5, 0.5)
  //     ctxMain.drawImage(demoImg, 0, 0)
  //   },
  //   false
  // )
  bgImg.addEventListener(
    'load',
    () => {
      ctxBg.drawImage(bgImg, 0, 0, 767, 575)
    },
    false
  )
  rankUpImg.addEventListener(
    'load',
    () => {
      ctxMain.scale(2, 2)
      ctxMain.globalAlpha = 0.1
      ctxMain.drawImage(rankUpImg, -240, -60, 600, 480)
    },
    false
  )
  detentionImg.addEventListener(
    'load',
    () => {
      ctxMain.drawImage(detentionImg, 300, 40, 400, 800)
    },
    false
  )

  // demoImg.src = getImageUrl(`cost/${sinner}/demo.jpg`)
  bgImg.src = getImageUrl(`cost/${sinner}/bg.png`)
  rankUpImg.src = getImageUrl(`cost/${sinner}/rank_up.png`)
  detentionImg.src = getImageUrl(`cost/${sinner}/detention.png`)
})
          
const props = defineProps({
  sinner: String
})
const sinner = props.sinner
</script>
