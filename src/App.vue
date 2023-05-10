<template>
  <div
    class="min-h-screen flex flex-column items-center text-gray-100 font-main bg-gradient-to-b from-sky-500 via-sky-300 via-30% to-sky-500"
  >
    <Loader v-if="loading" />
    <div class="weather container mx-auto p-20" v-else>
      <!-- <Search/> -->
      <div class="w-1/2 -mb-20 px-8 pr-24 relative z-10 flex">
        <input
          class="bg-sky-200 text-black rounded-3xl w-full h-10 px-8 text-lg focus:outline-sky-400 z-10 capitalize"
          type="text"
          v-model="city"
          @keydown.enter="getWeather"
        />
        <button
          class="absolute right-11 hover:right-10 focus:right-10 w-24 h-10 rounded-3xl bg-sky-500 focus:outline-none transition-all"
          type="button"
          @click="getWeather"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 ml-12 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span class="hidden">Показать погоду</span>
        </button>
      </div>
      <div v-if="isError">
        <p>Кажется, что то пошло не так, попробуйте снова</p>
      </div>
      <div class="w-full grid grid-cols-2 grid-rows-2 gap-6" v-else>
        <City :city="city" :weatherInfo="weatherInfo" />
        <Week :weatherList="weatherList" />
        <Current :weatherInfo="weatherInfo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { API_KEY, BASE_URL, LIST_URL } from "@/constants";
import City from "@/components/TheCity.vue";
import Week from "@/components/TheWeek.vue";
import Current from "@/components/TheCurrent.vue";
import Loader from "@/components/UI/TheLoader.vue";
import { upFirstLatter } from "./utils";

const city = ref("Belgorod");
const weatherInfo = ref(null);

function gerWeatherInfo() {
  fetch(`${BASE_URL}?q=${city.value}&appid=${API_KEY}&units=metric&lang=ru`)
    .then((response) => response.json())
    .then((data) => (weatherInfo.value = data))
    .then(() => (city.value = ""));
}

const weatherList = ref(null);

function getWeatherList() {
  fetch(`${LIST_URL}?q=${city.value}&appid=${API_KEY}&units=metric&cnt=6`)
    .then((response) => response.json())
    .then((data) => (weatherList.value = data));
}

function getWeather() {
  gerWeatherInfo();
  getWeatherList();
}
getWeather();

const loading = computed(() => !weatherInfo.value);
const isError = computed(
  () => weatherInfo.value?.cod !== 200 && weatherList.value?.cod !== 200
);
</script>

<style>
</style>