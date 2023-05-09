<template>
  <div
    class="min-h-screen flex flex-column items-center text-white font-main bg-gradient-to-b from-sky-500 via-sky-300 to-sky-500"
  >
    <div
      class="weather container mx-auto px-32 flex flex-col items-center border border-black"
    >
      <!-- <Search/> -->
      <div>
        <input
          class="text-black"
          type="text"
          v-model="city"
          @keydown.enter="getWeather"
        />
        <button type="button" @click="getWeather">Показать погоду</button>
      </div>
      <City :city="city" :weatherInfo="weatherInfo" />
      <Week :weatherList="weatherList" />
      <Current :weatherInfo="weatherInfo" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { API_KEY, BASE_URL } from "@/constants";
// import Search from "@/components/TheSearch.vue";
import City from "@/components/TheCity.vue";
import Week from "@/components/TheWeek.vue";
import Current from "@/components/TheCurrent.vue";

const city = ref("Belgorod");
const weatherInfo = ref(null);

// function getWeather() {
//   fetch(`${BASE_URL}?q=${city.value}&appid=${API_KEY}&units=metric&lang=ru`)
//   .then((response) => response.json())
//   .then((data) => weatherInfo.value = data)
// }

async function getWeather() {
  try {
    const response = await fetch(`${BASE_URL}?q=${city.value}&appid=${API_KEY}&units=metric&lang=ru`)
    const data = await response.json()
     weatherInfo.value = data
  } catch (e) {
    console.error(e)
  }
}

getWeather()

const weatherList = ref(null)

function getWeatherList() {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${API_KEY}&units=metric&cnt=6`)
  .then((response) => response.json())
  .then((data) => weatherList.value = data)
}
getWeatherList()

</script>

<style>
</style>
