<template>
  <div class="scroll-top position-fixed bottom-0 end-0 border rounded-circle
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
</style>

<script setup>
const toTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
