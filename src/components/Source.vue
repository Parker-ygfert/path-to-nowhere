<template>
<div class="font-20">
  <div>
    <div>『{{ $t('source_of_information') }}』：</div>
    <div class="d-flex">
      <a href="https://www.bilibili.com/video/BV1qM411477C" target="_blank">
        <div>綜合攻略 - 何二维一</div>
      </a>
      <a href="https://forum.gamer.com.tw/C.php?bsn=75802&snA=1367&tnum=1&subbsn=12" target="_blank" class="ms-1">
        <div>(巴哈版)</div>
      </a>
    </div>
    <a href="https://b23.tv/Ga7DqKJ" target="_blank">
      <div>烙印推薦 - MBCC战略分析组</div>
    </a>
    <a href="https://b23.tv/Mv7iyj4" target="_blank">
      <div>烙印推薦 - 啊颓Yyan</div>
    </a>
    <a href="https://b23.tv/WKv2MQH" target="_blank">
      <div>技能升級推薦 3.0 - 啊颓Yyan</div>
    </a>
  </div>
  <div class="mt-2">
    <div>『{{ $t('pool_info') }}』：</div>
    <div class="font-16">當前：</div>
    <div class="indent">
      <a :href="sinnerPath('catalyst/hamel')">哈梅爾</a>
      <span class="font-16 text-secondary">（我們都愛哈梅爾🌭🤡🥖）</span>
    </div>

    <div class="mt-1 font-16">未來：</div>
    <div class="indent">
      <a :href="sinnerPath('fury/deren')">黛倫</a>
      <span class="font-16 text-secondary">（限定角，all in）</span>
    </div>
    <div class="indent">
      <a :href="sinnerPath('endura/owo')">嗷嗚</a>
      <span class="font-16 text-secondary">（這麼可愛你能忍住不抽）</span>
    </div>
    <div class="indent">
      <a :href="sinnerPath('fury/nox')">NOX</a>
      <span class="font-16 text-secondary">（真神不解釋）</span>
    </div>
    <div class="indent">
      <a :href="sinnerPath('arcane/itte')">愛緹</a>
      <span class="font-16 text-secondary">（新法隊輸出、表現不錯）</span>
    </div>
    <div class="indent">
      <a :href="sinnerPath('umbra/crache')">柯希</a>
      <span class="font-16 text-secondary">（喜歡可以抽）</span>
    </div>
    <div class="indent font-0">
      <a :href="sinnerPath('endura/demon')" class="font-20">迪蒙</a>
      <span class="font-20">、</span>
      <a :href="sinnerPath('umbra/bai_yi')" class="font-20">白逸</a>
      <span class="font-20">、</span>
      <a :href="sinnerPath('reticle/langley')" class="font-20">蘭利</a>
      <span class="font-20">、</span>
      <a :href="sinnerPath('arcane/eirene')" class="font-20">伊琳娜</a>
    </div>
    <div class="indent font-16 text-secondary">（迪蒙：想玩疊盾可以抽）</div>
      <div class="indent font-16 text-secondary">（白逸：既然你都練白老闆了那想必是真愛吧！抽滿！）</div>
      <div class="indent font-16 text-secondary">（蘭利：媽咪就是好用）</div>
      <div class="indent font-16 text-secondary">（伊琳娜：貼貼）</div>
    <div class="indent">
      <a :href="sinnerPath('arcane/raven')">渡鴉</a>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.indent
  text-indent: 12px
</style>

<script setup>
const sinnerPath = string => {
  return `${import.meta.env.VITE_PATH}/sinner/${string}`
}
</script>
