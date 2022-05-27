import { For } from 'solid-js'
import { useNavigate, useParams } from 'solid-app-router'
import { COUNTRIES } from '../constants'

const CountrySelector = () => {
  const params = useParams()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { value } = e.target
    if (value) {
      navigate(`/crews/${value}`)
    }
  }

  return (
    <label>
      <span class="label">{params.code}</span>
      <select onChange={handleChange} value={params.code || ''}>
        <option value="">Select country</option>
        <For each={COUNTRIES}>
          {(country) => <option value={country.code}>{country.label}</option>}
        </For>
      </select>
    </label>
  )
}

export default CountrySelector
