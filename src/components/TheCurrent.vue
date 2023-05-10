<template>
  <ul class="grid grid-rows-2 grid-cols-2 gap-6">
    <li class="p-8 bg-block">
      <div class="text-xl mb-6">Ощущается как</div>
      <div class="text-3xl">{{ weatherInfo?.main.feels_like.toFixed()}}˚</div>
    </li>
    <li class="p-8 bg-block">
      <div class="text-xl mb-6">Давление</div>
      <div class="text-3xl">{{ convertPressure(weatherInfo?.main.pressure)}}  мм рт ст</div>
    </li>
    <li class="p-8 bg-block">
      <div class="text-xl mb-6">Влажность</div>
      <div class="text-3xl">{{ weatherInfo?.main.humidity }}%</div>
    </li>
    <li class="p-8 bg-block">
      <div class="text-xl mb-6">Ветер</div>
      <div class="text-3xl">{{ weatherInfo?.wind.speed.toFixed() }} м/с</div>
    </li>
  </ul> 
</template>

<script setup>
import { convertPressure } from '@/utils';

const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true,
  },
})
</script>

<style>
</style>