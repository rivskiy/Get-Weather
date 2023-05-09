<template>
  <div class="flex flex-col items-center">
    <div class="text-6xl">{{ weatherInfo?.name}}</div>
    <div class="text-2xl">{{ weatherInfo?.weather[0].description}}</div>
    <div class="text-8xl">{{ weatherInfo?.main.temp.toFixed()}}˚</div>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true,
  },
  city: {
    type: String,
    require: true
  }
})
</script>

<style>
</style>