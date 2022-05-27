import { createEffect, createMemo, For } from 'solid-js'
import { Link, Outlet, useLocation, useParams } from 'solid-app-router'

import { getCountries } from '../actions/countries'
import CountrySelector from './CountrySelector'

import '../styles/crews.css'

const Crews = () => {
  const params = useParams()
  const location = useLocation()

  const countries = createMemo(() => getCountries())

  createEffect(() => {
    console.log('Location', location.pathname)
  })

  return (
    <main>
      <header class="main-header">
        <h2 class="main-heading">Crews</h2>
      </header>
      <aside>
        <nav>
          {countries() ? (
            <ul>
              <For each={countries()}>
                {(c) => (
                  <li>
                    <Link href={`/crews/${c.code}`}>{c.label}</Link>
                  </li>
                )}
              </For>
            </ul>
          ) : (
            ''
          )}
        </nav>
      </aside>
      <Outlet />
    </main>
  )
}

export default Crews
