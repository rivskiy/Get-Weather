const PRESSURE_UNITS = 0.757762

export const convertPressure = (hpa) => Math.round(hpa * PRESSURE_UNITS)

function convertTimes(dateTime) {
  const date = new Date(dateTime * 1000)
  const hours = date.getHours()
  return hours
}

export const convertTime = (dateTime) => {
  const date = new Date(dateTime * 1000)
  const hours = date.getHours()
  return hours
}
