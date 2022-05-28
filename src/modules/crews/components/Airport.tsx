import { createMemo } from 'solid-js'
import { Outlet, useParams } from 'solid-app-router'

import { getAirport } from '../actions/airports'
import UnknownAirport from './UnknownAirport'

const Airport = () => {
  const params = useParams()

  const airport = createMemo(() => getAirport(params.airport))

  return (
    <div class="details airport-details">
      {airport() ? (
        <>
          <header class="details-header">
            <h4 class="details-heading">
              Airport: {airport() && airport().name}
            </h4>
          </header>
          <Outlet />
        </>
      ) : (
        <UnknownAirport />
      )}
      
    </div>
  )
}

export default Airport
