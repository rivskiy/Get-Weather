<template>
  <div class="xl:row-start-2 xl:row-end-4 flex flex-col items-center justify-center p-4 bg-block">
    <div class="xl:mb-4 text-2xl sm:text-4xl xl:text-6xl">{{ weatherInfo?.name}}</div>
    <div class="mb-4 xl:mb-8">{{ weatherInfo?.weather[0].description}}</div>
    <div class="text-5xl sm:text-8xl xl:text-8xl">{{ weatherInfo?.main.temp.toFixed()}}˚</div>
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