export interface ICountry {
  code: string
  label: string
}

export interface ICrew {
  id: string
  label: string
}

export interface IAirport {
  countryCode: string
  code: string
  name: string
}

export const COUNTRIES = [
  { code: 'ca', label: 'Canada' },
  { code: 'cu', label: 'Cuba' },
  { code: 'dm', label: 'Dominica' },
  { code: 'do', label: 'Dominican Republic' },
  { code: 'ht', label: 'Haiti' },
  { code: 'jm', label: 'Jamaica' },
  { code: 'mx', label: 'Mexico' },
  { code: 'us', label: 'United States' },
]

export const AIRPORTS = [
  {
    countryCode: 'mx',
    code: 'mex',
    name: 'Mexico City international Airport',
  },
  { countryCode: 'mx', code: 'cun', name: 'Cancún International Airport' },
  {
    countryCode: 'us',
    code: 'jfk',
    name: 'John F. Kennedy International Airport',
  },
  {
    countryCode: 'us',
    code: 'dfw',
    name: 'Dallas-Fort Worth International Airport',
  },
]

export const CREWS = [
  { id: '11', label: 'Crew #11' },
  { id: '12', label: 'Crew #12' },
  { id: '13', label: 'Crew #13' },
  { id: '14', label: 'Crew #14' },
  { id: '15', label: 'Crew #15' },
  { id: '16', label: 'Crew #16' },
  { id: '17', label: 'Crew #17' },
  { id: '18', label: 'Crew #18' },
  { id: '19', label: 'Crew #19' },
  { id: '20', label: 'Crew #20' },
  { id: '21', label: 'Crew #21' },
  { id: '22', label: 'Crew #22' },
]
