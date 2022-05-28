import { lazy, Suspense } from 'solid-js'
import { Router, Routes, Route } from 'solid-app-router'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import '@/styles/app.css'


const Airports = lazy(() => import('@/modules/airports/components/Airports'))
const Bookings = lazy(() => import('@/modules/bookings/components/Bookings'))
const Crews = lazy(() => import('@/modules/crews/components/Crews'))
const Country = lazy(() => import('@/modules/crews/components/Country'))
const CountryDetails = lazy(() => import('@/modules/crews/components/CountryDetails'))
const Airport = lazy(() => import('@/modules/crews/components/Airport'))
const AirportDetails = lazy(() => import('@/modules/crews/components/AirportDetails'))
const Crew = lazy(() => import('@/modules/crews/components/Crew'))
const CrewDetails = lazy(() => import('@/modules/crews/components/CrewDetails'))
const CrewSettings = lazy(() => import('@/modules/crews/components/CrewSettings'))

// const UnknownCountry = lazy(() => import('./UnknownCountry'))
// const UnknownAirport = lazy(() => import('./UnknownAirport'))
// const UnknownCrew = lazy(() => import('./UnknownCrew'))

const UnknownModule = lazy(() => import('@/modules/UnknownModule'))


const App = () => {
  return (
    <Router>
      <AppHeader />
      <Suspense fallback={() => 'Loading...'}>
      <Routes>
        <Route path="/airports" element={<Airports />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/crews" element={<Crews />}>
          <Route path="/:country" element={<Country />}>
            <Route path="/" element={<CountryDetails />} />
            <Route path="/:airport" element={<Airport />}>
              <Route path="/" element={<AirportDetails />} />
              <Route path="/:crew" element={<Crew />}>
                <Route path="/" element={<CrewDetails />} />
                <Route path="/settings" element={<CrewSettings />} />
              </Route>
            </Route>
          </Route>
          <Route path="/" element={<div class="crews-home">Crews Home will be here.</div>}/>
        </Route>
        <Route path="/" element={<Airports />} />
        <Route path="/*all" element={<UnknownModule />} />
      </Routes>
      </Suspense>
      <AppFooter />
    </Router>
  )
}

export default App
