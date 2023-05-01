<template>
<div class="w-fit m-auto font-20">
  <div class="text-center">
    <div class="fw-bold">
      —— {{ $t('source_of_information') }} ——
    </div>
    <template v-for="source in sources">
      <template v-if="source.complementary">
        <div class="d-flex justify-content-center mt-1">
          <a
            :href="source.link"
            target="_blank"
          >
            <div>{{ source.name }} - {{ source.author }}</div>
          </a>
          <a
            :href="source.complementary.link"
            target="_blank"
            class="ms-2"
          >
            <div>{{ source.complementary.name }}</div>
          </a>
        </div>
      </template>

      <template v-else>
        <a
          :href="source.link"
          target="_blank"
          class="d-block mt-1"
        >
          <div>{{ source.name }} - {{ source.author }}</div>
        </a>
      </template>
    </template>
  </div>
</div>
</template>

<script setup>
import sources from '@/data/sources.json'
</script>
