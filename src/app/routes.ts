import { lazy } from 'solid-js'
import { RouteDefinition } from 'solid-app-router'

import airportsRoutes from '@/modules/airports/routes'
import bookingsRoutes from '@/modules/bookings/routes'
import crewsRoutes from '@/modules/crews/routes'

const routes: RouteDefinition[] = [
  ...airportsRoutes,
  ...bookingsRoutes,
  ...crewsRoutes,
  {
    path: '/',
    component: lazy(() => import('@/modules/airports/components/Airports')),
  },
]

export default routes
