import { RouteDefinition } from 'solid-app-router'
import { lazy } from 'solid-js'

const routes: RouteDefinition[] = [
  {
    path: '/bookings',
    component: lazy(() => import('./components/Bookings')),
  },
]

export default routes
