import { NavLink } from 'solid-app-router'

const AppHeader = () => (
  <header class="app-header">
    <h1>
      <NavLink href="/" end>
        SolidJS Starter (Vite)
      </NavLink>
    </h1>
    <nav class="app-nav">
      <NavLink href="/airports">Airports</NavLink>
      <NavLink href="/bookings">Bookings</NavLink>
      <NavLink href="/crews">Crews</NavLink>
    </nav>
  </header>
)

export default AppHeader
