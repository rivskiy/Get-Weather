<template>
  <div class="w-full flex justify-between border border-black">
    <ul
      class="flex flex-col items-center gap-y-4 border border-black"
      v-for="(item, index) in weatherList?.list"
      :key="index"
    >
      <li class="text-xl">{{ convertTime(item.dt) }} ч</li>
      <li :class="`icon__${item.weather[0].icon}`"></li>
      <li class="text-3xl">{{ item.main.temp.toFixed() }}˚</li>
      <li>{{ item.weather[0].icon }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherList: {
    type: [Object, null],
    required: true,
  },
})

function convertTime(dateTime) {
  const date = new Date(dateTime * 1000)
  const hours = date.getHours()
  return hours
}
</script>

<style>
.icon__01d,
.icon__01n,
.icon__02d,
.icon__02n,
.icon__03d,
.icon__03n,
.icon__04d,
.icon__04n,
.icon__09d,
.icon__09n,
.icon__10d,
.icon__10n,
.icon__11n,
.icon__11n,
.icon__13d,
.icon__13n,
.icon__50d,
.icon__50n {
  width: 50px;
  height: 50px;
  background-size: 50px;
  background-repeat: no-repeat;
}
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