import { createMemo, createEffect } from 'solid-js'
import { Link, Outlet, useParams } from 'solid-app-router'

import { getCountry } from '../actions/countries'
import UnknownCountry from './UnknownCountry'

const Country = () => {
  const params = useParams()

  const country = createMemo(() => getCountry(params.code))

  createEffect(() => {
    console.log('Country', country())
  })

  return (
    <div class="details country-details">
      {country() ? (
        <>
          <header class="details-header">
            <h3 class="details-heading">
              Country:{' '}
              <Link href={`/crews/${country().code}`}>{country().label}</Link>
            </h3>
          </header>
          <Outlet />
        </>
      ) : (
        <UnknownCountry />
      )}
    </div>
  )
}

export default Country
