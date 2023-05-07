<template>
  <div class="m-1">
    <template v-for="comment in comments">
      <div class="comment-box border-top border-2 p-1" >
        <blockquote class="blockquote mb-0 font-18">
          <p class="mb-1 blue-700">
            {{ comment.content }}
          </p>
          <footer class="blockquote-footer mt-0 mb-1 ms-auto font-12 text-end">
            {{ createdAt(comment) }}
          </footer>
          <template v-for="reply in comment.replies">
            <div
              v-if="reply.verified"
              class="reply-box d-flex flex-wrap justify-content-between align-items-center
                     w-90 ms-auto mb-0 py-1 border-top border-1 font-14"
            >
              <p class="d-inline-block mb-0">
                {{ reply.content }}
              </p>
              <footer class="blockquote-footer ms-auto my-0 text-secondary">
                {{ createdAt(reply) }}
              </footer>
            </div>
          </template>
        </blockquote>

        <div class="d-flex justify-content-between align-items-center mt-1 font-14">
          <p
            @click="showReply(comment.id)"
            :id="`reply_btn_${comment.id}`"
            class="mb-0 cursor-pointer text-success"
          >
            {{ $t('comment.reply') }}
          </p>
          <component
            :is="CommentReply"
            :id="`reply_${comment.id}`"
            :commentId="comment.id"
            class="d-none"
          />
        </div>
      </div>
    </template>

    <form
      @submit.prevent="addComment"
      class="mt-2 font-16"
    >
      <div class="mb-1">
        <label for="comment" class="form-label mb-1">
          {{ $t('comment.comment') }}：
        </label>
        <div class="position-relative">
          <textarea
            v-model="newCommentContent"
            id="comment"
            class="form-control p-1 rounded-0 font-16"
            @keypress="typingListener"
          >
          </textarea>
          <div
            ref="submitting"
            class="submitting d-none position-absolute top-0 start-0 w-100 h-100"
          >
            <div class="w-100 h-100 bg-white opacity-50"></div>
            <div class="loading position-absolute top-50 start-50">
              <div
                class="spinner-border w-100 h-100 text-primary"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        :disabled="!newCommentContent"
        ref="submitBtn"
        type="submit"
        class="btn btn-sm btn-primary d-block ms-auto px-2 rounded-0 font-16"
      >
        {{ $t('comment.submit') }}
      </button>
    </form>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_color.sass'

.comment-box
  border-color: darkGray !important
  &:last-of-type
    border-bottom-style: solid
  .reply-box
    border-color: Silver !important
    &:last-child
      border-bottom-style: solid
      border-bottom-width: 1px

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

.loading
  width: 40px
  height: 40px
  transform: translate(-50%, -50%)
</style>

<script setup>
import { onMounted, ref } from 'vue'
import { db } from '@/firebase/index.js'
import { collection, query, where, orderBy, addDoc, onSnapshot, Timestamp } from 'firebase/firestore'
import { getIp } from '@/scripts/get_ip.js'
import CommentReply from './CommentReply'

const props = defineProps({
  sinner: String
})

const sinner = props.sinner
const comments = ref([])
const submitting = ref(null)
const submitBtn = ref(null)

onMounted(async () => {
  const q = query(
    collection(db, 'comments'),
    where('sinner', '==', sinner),
    where('verified', '==', true),
    orderBy('created_at', 'desc')
  )

  onSnapshot(q, querySnapshot => {
    const fbComments = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      const comment = {
        id: doc.id,
        content: data.content,
        replies: data.replies,
        created_at: data.created_at
      }

      fbComments.push(comment)
    })

    comments.value = fbComments
  })
})

const newCommentContent = ref('')

const createdAt = data => {
  const milliseconds = data.created_at.seconds * 1000

  return new Date(milliseconds).toLocaleString()
}

const typingListener = (e) => {
  if (!e.shiftKey && e.key === 'Enter') addComment()
}

const addComment = () => {
  const content = newCommentContent.value.trim() 
  if (!content) return 

  writeComment(content)
}

const writeComment = async (content) => {
  submitting.value.classList.remove('d-none')
  submitBtn.value.disabled = true

  const ip = await getIp()
  const data = {
    sinner: sinner,
    content: content,
    ip: ip.ip,
    country: ip.country,
    verified: true,
    created_at: Timestamp.fromDate(new Date())
  }

  addDoc(collection(db, 'comments'), data)

  newCommentContent.value = ''
  submitting.value.classList.add('d-none')
}

const showReply = id => {
  const replyBtn = document.querySelector(`#reply_btn_${id}`)
  const reply = document.querySelector(`#reply_${id}`)
  replyBtn.classList.add('d-none')
  reply.classList.remove('d-none')
}
</script>
