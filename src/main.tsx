import { render } from 'solid-js/web'
import { Router } from 'solid-app-router'

import './styles/main.css'
import App from './components/shell/App'

const rootEl = document.getElementById('root')

if (rootEl) {
  render(
    () => (
      <Router>
        <App />
      </Router>
    ),
    rootEl
  )
} else {
  console.error('Cannot find the root element.')
}
