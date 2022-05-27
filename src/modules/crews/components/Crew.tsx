import { createEffect, For } from 'solid-js'
import { Link, Outlet, useParams } from 'solid-app-router'

import { CREWS } from '../constants'

const Crew = () => {
  const params = useParams()

  createEffect(() => {
    console.log('Crew ID', params.id)
  })

  return (
    <div class="details crew-details">
      <header class="details-header">
        <h3 class="details-heading">Crew</h3>
      </header>
      <aside>
        <ul class="crew-listing">
          <For each={CREWS}>
            {(crew) => (
              <li>
                <Link href={`/crews/${crew.id}`}>{crew.label}</Link>
              </li>
            )}
          </For>
        </ul>
      </aside>
      <Outlet />
    </div>
  )
}

export default Crew
