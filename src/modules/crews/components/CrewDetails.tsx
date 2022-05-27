import { useParams } from 'solid-app-router'

const CrewDetails = () => {
  const params = useParams()

  return (
    <div class="crew-details">
      <header>
        <h3>Crew #{params.id} Details</h3>
      </header>
    </div>
  )
}

export default CrewDetails
