const PRESSURE_UNITS = 0.757762

export const convertPressure = (hpa) => Math.round(hpa * PRESSURE_UNITS)

export const convertTime = (dateTime) => {
  const date = new Date(dateTime * 1000)
  const hours = date.getHours()
  return hours
}

export const setLocalWeather = data =>  localStorage.setItem('localWeather', JSON.stringify(data))

export const setLocalWeatherList = data => localStorage.setItem('localWeatherList', JSON.stringify(data))

export const getLocalWeatherAll = (weatherInfo, weatherList) => {
  const localWeather = localStorage.getItem('localWeather')
  const localWeatherList = localStorage.getItem('localWeatherList')

  if (JSON.parse(localWeather) && JSON.parse(localWeatherList)) {
    weatherInfo.value = JSON.parse(localWeather)
    weatherList.value = JSON.parse(localWeatherList)
  }
}