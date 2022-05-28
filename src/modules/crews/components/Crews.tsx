import { createEffect, createMemo, For } from 'solid-js'
import { Link, Outlet, useLocation, useParams } from 'solid-app-router'

import { getCountries } from '../actions/countries'

import '../styles/crews.css'


const Crews = () => {
  const params = useParams()
  const location = useLocation()

  const countries = createMemo(() => getCountries())

  createEffect(() => {
    console.log('Location', location.pathname)
  })

  return (
    <main class="main--crews">
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
              <li>
                <Link href={`/crews/something`}>Some country</Link>
              </li>
            </ul>
          ) : (
            ''
          )}
        </nav>
      </aside>
      <div class="content">
        <Outlet />
      </div>
      <footer class="main-footer">
        <p>Main footer will be here.</p>
      </footer>
    </main>
  )
}

export default Crews
