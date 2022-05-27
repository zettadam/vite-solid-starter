import { ICountry, COUNTRIES } from '../constants'

export function getCountries() {
  return COUNTRIES
}

export function getCountry(code: string) {
  return COUNTRIES.find((c: ICountry) => c.code === code)
}
