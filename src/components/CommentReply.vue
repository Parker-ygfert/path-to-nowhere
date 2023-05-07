<template>
  <form
    @submit.prevent="addReply"
    class="row flex-nowrap align-items-center m-0"
  >
    <fieldset
      ref="replyForm"
      class="row flex-nowrap align-items-center"
    >
      <div class="col p-0">
        <input
          v-model="newReplyContent"
          type="text"
          id="inputPassword6"
          class="form-control rounded-0 font-14"
          aria-describedby="passwordHelpInline"
        >
      </div>
      <div class="col flex-grow-0 ms-1 p-0">
        <button
          :disabled="!newReplyContent"
          type="submit"
          class="btn btn-sm btn-primary rounded-0 font-14 text-nowrap"
        >
          {{ $t('comment.reply') }}
        </button>
      </div>
    </fieldset>

    <div class="col flex-grow-0 ms-1 p-0">
      <button
        @click="removeReply(props.commentId)"
        ref="cancelBtn"
        type="reset"
        class="btn btn-sm btn-light rounded-0 font-14 text-nowrap"
      >
        {{ $t('comment.cancel') }}
      </button>
    </div>
  </form>
</template>

<style lang="sass" scoped>
.form-control
  padding: .1rem

.btn
  padding: .1rem .2rem

.form-control, .btn
  box-shadow: none
</style>

<script setup>
import { ref } from 'vue'
import { db } from '@/firebase/index.js'
import { doc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore'
import { getIp } from '@/scripts/get_ip.js'

const props = defineProps({
  commentId: String
})

const replyForm = ref(null)
const newReplyContent = ref('')
const cancelBtn = ref(null)

const removeReply = id => {
  const replyBtn = document.querySelector(`#reply_btn_${id}`)
  const reply = document.querySelector(`#reply_${id}`)
  replyBtn.classList.remove('d-none')
  reply.classList.add('d-none')
}

const addReply = () => {
  const content = newReplyContent.value.trim() 
  if (!content) return 

  writeReply(content)
}

const writeReply = async (content) => {
  replyForm.value.disabled = true

  const ip = await getIp()
  const commentRef = doc(db, 'comments', props.commentId)
  const data = {
    content: content,
    ip: ip.ip,
    country: ip.country,
    verified: true,
    created_at: Timestamp.fromDate(new Date())
  }

  updateDoc(commentRef, {
    replies: arrayUnion(data)
  })

  cancelBtn.value.click()
  replyForm.value.disabled = false
}
</script>
