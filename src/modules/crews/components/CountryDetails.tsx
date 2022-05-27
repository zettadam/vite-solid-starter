import { createMemo, For } from 'solid-js'
import { Link, useParams } from 'solid-app-router'

import { getCountry } from '../actions/countries'
import { getCountryAirports } from '../actions/airports'

const CountryDetails = () => {
  const params = useParams()

  const country = createMemo(() => getCountry(params.code))
  const airports = createMemo(() => getCountryAirports(params.code))

  return (
    <div class="details-content">
      Details for {country() && country().label} will be shown here.
      <h4>Airports</h4>
      {airports() ? (
        <ul>
          <For each={airports()}>
            {(a) => (
              <li>
                <Link href={`/crews/${a.countryCode}/${a.code}`}>{a.name}</Link>
              </li>
            )}
          </For>
        </ul>
      ) : (
        <p>No airports yet</p>
      )}
    </div>
  )
}

export default CountryDetails
