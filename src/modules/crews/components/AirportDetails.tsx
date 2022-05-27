import { useParams } from 'solid-app-router'

const AirportDetails = () => {
  const params = useParams()

  return (
    <div class="details-content">
      <p>Details for airport will be shown here.</p>
    </div>
  )
}

export default AirportDetails
