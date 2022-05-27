import { AIRPORTS, IAirport } from '../constants'

export function getCountryAirports(code: string) {
  return AIRPORTS.filter((a: IAirport) => a.countryCode === code)
}

export function getAirport(code: string) {
  return AIRPORTS.find((a: IAirport) => a.code === code)
}
