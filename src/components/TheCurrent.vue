<template>
  <ul class="w-full flex flex-wrap">
    <li class="w-1/2 border border-black">
      <div class="text-xl">Ощущается как</div>
      <div class="text-3xl">{{ weatherInfo?.main.feels_like.toFixed()}}˚</div>
    </li>
    <li class="w-1/2 border border-black">
      <div class="text-xl">Влажность</div>
      <div class="text-3xl">{{ weatherInfo?.main.humidity }}%</div>
    </li>
    <li class="w-1/2 border border-black">
      <div class="text-xl">Давление</div>
      <div class="text-3xl">766 мм рт ст</div>
    </li>
    <li class="w-1/2 border border-black">
      <div class="text-xl">Ветер</div>
      <div class="text-3xl">{{ weatherInfo?.wind.speed.toFixed() }} м/с</div>
    </li>
  </ul> 
</template>

<script setup>
const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true,
  },
})
</script>

<style>
</style>