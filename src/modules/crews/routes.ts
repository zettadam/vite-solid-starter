import { RouteDefinition } from 'solid-app-router'
import { lazy } from 'solid-js'

const routes: RouteDefinition[] = [
  {
    path: '/crews',
    component: lazy(() => import('./components/Crews')),
    children: [
      {
        path: '/:code',
        component: lazy(() => import('./components/Country')),
        children: [
          {
            path: '/',
            component: lazy(() => import('./components/CountryDetails')),
          },
          {
            path: '/:airportCode',
            component: lazy(() => import('./components/Airport')),
            children: [
              {
                path: '/:id',
                component: lazy(() => import('./components/Crew')),
                children: [
                  {
                    path: '/',
                    component: lazy(() => import('./components/CrewDetails')),
                  },
                  {
                    path: '/settings',
                    component: lazy(() => import('./components/CrewSettings')),
                  },
                  {
                    path: '/*all',
                    component: lazy(() => import('./components/UnknownCrew')),
                  },
                ],
              },
              {
                path: '/',
                component: lazy(() => import('./components/AirportDetails')),
              },
              {
                path: '/*all',
                component: lazy(() => import('./components/UnknownAirport')),
              },
            ],
          },
        ],
      },
      {
        path: '/',
      },
      {
        path: '/*all',
        component: lazy(() => import('./components/UnknownCountry')),
      },
    ],
  },
  {
    path: '/*all',
    component: lazy(() => import('./components/Unknown')),
  },
]

export default routes
