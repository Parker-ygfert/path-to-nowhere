<template>
    <div class="info-box mt-1 me-1 me-lg-2 font-16">
      <table width="100%" class="table table-sm table-bordered mb-1 border-secondary">
        <tbody align="center">
          <tr v-if="isPresent(sinner.recommended_shackle)">
            <th scope="row">
              {{ $t('shackle.recommended') }}
            </th>
            <td>
              {{ sinner.recommended_shackle }}
            </td>
          </tr>

          <tr v-if="isPresent(sinner.qualitative_shackles)">
            <th scope="row">
              {{ $t('shackle.qualitative') }}
            </th>
            <td class="text-nowrap">
              {{ sinner.qualitative_shackles }}
            </td>
          </tr>

          <tr v-if="isPresent(sinner.supplement_shackles)">
            <th scope="row" valign="middle">
              {{ $t('shackle.supplement') }}
            </th>
            <td>
              <div
                v-for="shackle in sinner.supplement_shackles"
                :class="{ 'text-danger' : shackle.emphasis }"
              >
                {{ shackle.shackle }}
              </div>
            </td>
          </tr>

          <tr v-if="isPresent(sinner.exclusive)">
            <th scope="row" valign="middle" class="text-nowrap">
              {{ $t('exclusive.exclusive') }}
            </th>
            <td
              class="text-nowrap"
              :class="sinner.exclusive.emphasis"
              v-html="$t(`sinner.${sinner.name}.exclusive`)"
            >
            </td>
          </tr>

          <template v-if="isPresent(sinner.exclusive_priority)">
            <tr>
              <th scope="row" valign="middle" class="text-nowrap">
                {{ $t('exclusive.priority') }}
              </th>
              <td class="text-nowrap">
                {{ sinner.exclusive_priority.tier }}
              </td>
            </tr>

            <tr>
              <th scope="row" valign="middle" class="text-nowrap">
                {{ $t('exclusive.level') }}
              </th>
              <td
                class="position-relative text-nowrap"
                :class="sinner.exclusive_priority.emphasis"
              >
                {{ sinner.exclusive_priority.level }}
                <div
                  v-if="sinner.exclusive_priority.emphasis"
                  class="exclusive-prompt position-absolute w-100 font-13 text-secondary"
                >
                  *{{ $t('high_profits') }}
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
  
      <table
        v-if="isPresent(sinner.strength)"
        width="100%"
        class="table table-sm table-bordered mb-1 border-secondary"
      >
        <thead align="center">
          <tr>
            <th scope="col" colspan="2">
              {{ $t('other.overall_strength') }}
            </th>
          </tr>
        </thead>
        <tbody align="center">
          <template v-for="strength in sinner.strength">
            <tr>
              <td>
                {{ $t(`other.${strength.map}`) }}
              </td>
              <td>
                {{ decode(strength.strength) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
  
      <table
        v-if="isPresent(sinner.skills)"
        width="100%"
        class="table table-sm table-bordered mb-1 border-secondary"
      >
        <thead align="center">
          <tr>
            <th scope="col">
              {{ $t('skill.skill') }}
            </th>
            <th scope="col">
              {{ $t('skill.upgrade_order') }}
            </th>
            <th scope="col">
              {{ $t('skill.recommended') }}
            </th>
          </tr>
        </thead>
        <tbody align="center">
          <template v-for="skill in sinner?.skills">
            <tr>
              <th scope="row" class="px-2">
                {{ skill.skill }}
              </th>
              <td>
                {{ skill.order }}
              </td>
              <td :class="{ 'fw-bold text-danger' : skill.threshold }">
                {{ skill.level }}
              </td>
            </tr>
          </template>
        </tbody>
        <caption class="pt-0">
          {{ $t('skill.prompt') }}<br>
          {{ sinner.skill_des && $t(`sinner.${sinner.name}.skill_des`) }}
        </caption>
      </table>
    </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/_rwd.sass'

.info-box
  @include tablet
    margin-left: auto !important
    margin-right: auto !important
    max-width: 300px
  .exclusive-prompt
    top: 6px
    left: 30px

.table
  &.table-sm
    flex-grow: 0
    flex-shrink: 0
    flex-basis: 300px
    th, td
      padding-top: .1rem
      padding-bottom: .1rem
</style>

<script setup>
const props = defineProps({
  sinner: Object
})

const sinner = props.sinner

const decode = html => {
  const decoder = document.createElement('div')
  decoder.innerHTML = html
  return decoder.textContent
}

const isPresent = text => {
  return text !== undefined && text !== null
}
</script>
