import { RouteDefinition } from 'solid-app-router'
import { lazy } from 'solid-js'

const routes: RouteDefinition[] = [
  {
    path: '/airports',
    component: lazy(() => import('./components/Airports')),
  },
]

export default routes
