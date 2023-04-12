<template>
  <div class="row flex-nowrap align-items-center m-0">
    <div class="col p-0">
      <input
        type="text"
        id="inputPassword6"
        class="form-control rounded-0 font-14"
        aria-describedby="passwordHelpInline"
      >
    </div>
    <div class="col flex-grow-0 ms-1 p-0">
      <button
        type="submit"
        class="btn btn-sm btn-primary rounded-0 font-14 text-nowrap"
      >
        {{ $t('comment.reply') }}
      </button>
    </div>
    <div class="col flex-grow-0 ms-1 p-0">
      <button
        @click="removeReply(props.commentId)"
        type="submit"
        class="btn btn-sm btn-light rounded-0 font-14 text-nowrap"
      >
        {{ $t('comment.cancel') }}
      </button>
    </div>
  </div>
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
const props = defineProps({
  commentId: Number
})

const removeReply = id => {
  const replyBtn = document.querySelector(`#reply_btn_${id}`)
  const reply = document.querySelector(`#reply_${id}`)
  replyBtn.classList.remove('d-none')
  reply.classList.add('d-none')
}
</script>
