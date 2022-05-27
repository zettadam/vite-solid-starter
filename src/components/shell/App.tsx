import { Router, useRoutes } from 'solid-app-router'

import routes from '@/app/routes'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import '@/styles/app.css'

const App = () => {
  const Routes = useRoutes(routes)
  return (
    <Router>
      <AppHeader />
      <Routes />
      <AppFooter />
    </Router>
  )
}

export default App
