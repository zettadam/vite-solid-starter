import { createMemo, For } from 'solid-js'
import { Link, Outlet, useParams } from 'solid-app-router'

import { getCountry } from '../actions/countries'
import { getCountryAirports } from '../actions/airports'

const CountryDetails = () => {
  const params = useParams()

  const country = createMemo(() => getCountry(params.country))
  const airports = createMemo(() => getCountryAirports(params.country))

  return (
    <div class="details-content">
      <p>Details for {country() && country().label} will be shown here.</p>
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
          <li>
            <Link href={`/crews/us/something`}>Some airport</Link>
          </li>
        </ul>
      ) : (
        <p>No airports yet</p>
      )}
      <Outlet />
    </div>
  )
}

export default CountryDetails
