<template>
  <ul class=" grid grid-rows-2 grid-cols-2 gap-3 md:gap-6">
    <li class="current-item">
      <div class="">Ощущается как</div>
      <div class="current-text">{{ weatherInfo?.main.feels_like.toFixed()}}˚</div>
    </li>
    <li class="current-item">
      <div class="">Давление</div>
      <div class="current-text">{{ convertPressure(weatherInfo?.main.pressure)}}  мм рт ст</div>
    </li>
    <li class="current-item">
      <div class="">Влажность</div>
      <div class="current-text">{{ weatherInfo?.main.humidity }}%</div>
    </li>
    <li class="current-item">
      <div class="">Ветер</div>
      <div class="current-text">{{ weatherInfo?.wind.speed.toFixed() }} м/с</div>
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