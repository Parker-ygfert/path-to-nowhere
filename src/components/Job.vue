<template>
<div class="d-flex flex-wrap">
  <div v-for="character in characters"
       :id="character.name"
       class="character-img position-relative me-1 mb-1">
    <router-link :to="{
                   name: 'sinner',
                   params: {
                     job: $route.name,
                     name: character.name
                   }
                 }">
      <CharacterImg :id="character.name" :job="$route.name" :character="character" />
    </router-link>
  </div>
</div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd'

.character-img
  width: 180px
  height: 270px
  @include tablet
    margin-left: auto
    margin-right: auto !important
</style>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
// import { db } from '@/firebase/index.js'
// import { collection, getDocs } from 'firebase/firestore'
import CharacterImg from './CharacterImg'
import sinners from '@/data/sinners.json'

const route = useRoute()
const characters = sinners[route.name]

onMounted(() => {
  const sinner = route.query.sinner
  const sinnerElement = document.querySelector(`#${sinner}`)
  if (sinnerElement) sinnerElement.scrollIntoView()
})

// onMounted(async () => {
//   const querySnapshot = await getDocs(collection(db, 'sinners'))
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data())
//   })
// })
</script>
