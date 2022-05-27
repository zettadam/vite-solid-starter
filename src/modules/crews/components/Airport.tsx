import { createMemo } from 'solid-js'
import { Outlet, useParams } from 'solid-app-router'

import { getAirport } from '../actions/airports'

const Airport = () => {
  const params = useParams()

  const airport = createMemo(() => getAirport(params.airport))

  return (
    <div class="details airport-details">
      <header class="details-header">
        <h4 class="details-heading">Airport: {airport() && airport().name}</h4>
      </header>
      <Outlet />
    </div>
  )
}

export default Airport
