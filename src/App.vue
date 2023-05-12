<template>
  <div
    class="text-xs sm:text-sm lg:text-base text-gray-100 font-main main-bg-day"
  >
    <Loader v-if="loading" />
    <div class="min-h-screen xl:container mx-auto p-4 sm:p-6 md:p-8 lg:p-8 xl:p-40 grid grid-rows-[40px_1fr_1fr_1fr] xl:grid-cols-2 xl:grid-rows-[40px_1fr_1fr] gap-4 md:gap-6">
      <!-- <Search/> -->
      <div class="col-span-full pr-3 flex bg-block">
        <input
          class="bg-sky-200 text-black rounded-3xl h-10 w-11/12 px-8 text-lg focus:outline-sky-400 hover:outline hover:outline-sky-500 hover:outline-2 z-10 capitalize"
          type="text"
          v-model="city"
          @keydown.enter="getWeather"
        />
        <button
          class="absolute left-[100%] translate-x-[-100%] w-1/3 h-10 pr-2 md:pr-6 rounded-3xl bg-sky-600 focus:outline-none hover:bg-sky-700 transition-all"
          type="button"
          @click="getWeather"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 ml-auto stroke-2"
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
      <!-- error -->
      <div class="w-fit h-10 px-5 pt-2  bg-block" v-if="isError && !loading">
        <p>Кажется, что то пошло не так, попробуйте снова</p>
      </div>
      <City :city="city" :weatherInfo="weatherInfo" v-if="!isError"/>
      <Hours :weatherList="weatherList" v-if="!isError"/>
      <Current :weatherInfo="weatherInfo" v-if="!isError"/>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { API_KEY, BASE_URL, LIST_URL } from "@/constants";
import City from "@/components/TheCity.vue";
import Hours from "@/components/TheHours.vue";
import Current from "@/components/TheCurrent.vue";
import Loader from "@/components/UI/TheLoader.vue";

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