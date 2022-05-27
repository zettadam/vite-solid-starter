import { AIRPORTS } from '../constants'

export function getCountryAirports(code) {
  return AIRPORTS.filter((a) => a.countryCode === code)
}

export function getAirport(code) {
  return AIRPORTS.find((a) => a.code === code)
}
