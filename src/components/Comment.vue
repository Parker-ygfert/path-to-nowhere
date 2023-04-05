<template>
  <div class="m-1">
    <div v-for="comment in comments">
      <div class="border-bottom p-1">
        <blockquote class="blockquote mb-0 font-18">
          <p class="mb-1">{{ comment.content }}</p>
          <div class="d-flex justify-content-between align-items-center font-14">
            <!-- <p class="mb-0 cursor-pointer text-secondary">{{ $t('reply') }}</p> -->
            <component :is="CommentReply" />
            <footer class="blockquote-footer mt-0">
              {{  comment.created_at.toLocaleString() }}
            </footer>
          </div>
        </blockquote>
      </div>
    </div>

    <form class="mt-2 font-16" @submit.prevent="addComment">
      <div class="mb-1">
        <label for="comment" class="form-label mb-1">
          {{ $t('comment') }}：
        </label>
        <textarea
          v-model="newCommentContent"
          type="email"
          id="comment"
          class="form-control p-1 rounded-0 font-16"
          aria-describedby="emailHelp"
        >
        </textarea>
      </div>
      <button
        :disabled="!newCommentContent"
        type="submit"
        class="btn btn-sm btn-primary d-block ms-auto px-2 rounded-0 font-16"
      >
        {{ $t('submit') }}
      </button>
    </form>
  </div>
</template>

<style lang="sass" scoped>
button
  padding-top: .15rem
  padding-bottom: .15rem
  &:disabled
    cursor: not-allowed !important
    pointer-events: all !important
  &:focus-visible
    box-shadow: 0 0 0 4px rgba(var(--bs-btn-focus-shadow-rgb), .5)

textarea
  resize: none
  &.form-control
    &:focus
      box-shadow: 0 0 0 4px rgba(13,110,253,.25)
</style>

<script setup>
import { onMounted, ref } from 'vue'
import { db } from '@/firebase/index.js'
import { collection, query, where, addDoc, onSnapshot, Timestamp } from 'firebase/firestore'

const props = defineProps({
  sinner: String
})

// const comments = ref([])
const comments = ref([
  {
    content: 'asdf',
    created_at: new Date()
  }
])

// onMounted(async () => {
//   const q = query(
//     collection(db, 'comments'),
//     where('sinner', '==', props.sinner),
//     where('verify', '==', true)
//   )

//   onSnapshot(q, querySnapshot => {
//     const fbComments = []

//     querySnapshot.forEach((doc) => {
//       const data = doc.data()
//       const comment = {
//         id: doc.id,
//         content: data.content,
//         created_at: new Date(data.created_at.seconds)
//       }

//       fbComments.push(comment)
//     })

//     comments.value = fbComments
//   })
// })

const newCommentContent = ref('')

const addComment = async () => {
  const data = {
    sinner: props.sinner,
    content: newCommentContent.value.trim(),
    verify: true,
    created_at: Timestamp.fromDate(new Date())
  }
  const docRef = await addDoc(collection(db, 'comments'), data)
}

import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import CommentReply from './CommentReply'

const router = useRouter()
const route = useRoute()

const layouts = {
  CommentReply: CommentReply
};

const defaultLayout = 'default'
const layout = computed(() => layouts[route.meta.layout || defaultLayout] )
</script>
