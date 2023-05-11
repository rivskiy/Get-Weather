<template>
  <div class="p-8 flex items-center justify-between text-sm lg:text-base bg-block">
    <ul
      class="flex flex-col items-center gap-y-4"
      v-for="(item, index) in weatherList?.list"
      :key="index"
    >
      <li class="">{{ convertTime(item.dt) }}:00</li>
      <li :class="`icon-size icon__${item.weather[0].icon}`"></li>
      <li class="">{{ item.main.temp.toFixed() }}˚</li>
    </ul>
  </div>
</template>

<script setup>
import { convertTime } from '@/utils';

const props = defineProps({
  weatherList: {
    type: [Object, null],
    required: true,
  },
})
</script>

<style>
.icon__01d,
.icon__01n {
  background-image: url("@/assets/images/01d.png");
}

.icon__02d,
.icon__02n {
  background-image: url("@/assets/images/02d.png");
}

.icon__03d,
.icon__03n {
  background-image: url("@/assets/images/03d.png");
}

.icon__04d,
.icon__04n {
  background-image: url("@/assets/images/04d.png");
}

.icon__09d,
.icon__09n {
  background-image: url("@/assets/images/09d.png");
}

.icon__10d,
.icon__10n {
  background-image: url("@/assets/images/10d.png");
}

.icon__11n,
.icon__11n {
  background-image: url("@/assets/images/11d.png");
}

.icon__13d,
.icon__13n {
  background-image: url("@/assets/images/13d.png");
}

.icon__50d,
.icon__50n {
  background-image: url("@/assets/images/50d.png");
}
</style>