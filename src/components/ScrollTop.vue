<template>
  <div class="scroll-top tablet-show position-fixed border rounded-circle
              bg-secondary text-white font-30 text-center cursor-pointer"
       @click="toTop()">
    <i class="bi bi-chevron-up"></i>
  </div>
</template>

<style lang="sass" scoped>
.scroll-top
  width: 40px
  height: 40px
  line-height: 38px
  right: 6px
  bottom: 6px
</style>

<script setup>
const toTop = () => {
  const scrollBox = document.querySelector('#scroll-box')
  if (scrollBox) scrollBox.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
