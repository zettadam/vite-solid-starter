import { createMemo } from 'solid-js'
import { useParams } from 'solid-app-router'

import { getAirport } from '../actions/airports'

const AirportDetails = () => {
  const params = useParams()

  const airport = createMemo(() => getAirport(params.airport))

  return (
    <div class="details-content">
      <p>
        Details for {airport().name} ({airport().code})
      </p>
    </div>
  )
}

export default AirportDetails
