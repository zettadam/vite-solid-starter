import { createMemo, createEffect } from 'solid-js'
import { Link, Outlet, useParams } from 'solid-app-router'

import { getCountry } from '../actions/countries'

const Country = () => {
  const params = useParams()

  const country = createMemo(() => getCountry(params.code))

  return (
    <div class="details country-details">
      <header class="details-header">
        <h3 class="details-heading">
          Country:{' '}
          {country() && (
            <Link href={`/crews/${country().code}`}>{country().label}</Link>
          )}
        </h3>
      </header>
      <Outlet />
    </div>
  )
}

export default Country
