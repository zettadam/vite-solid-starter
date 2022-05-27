import { render } from 'solid-js/web'

import './styles/main.css'
import App from './components/shell/App'

const rootEl = document.getElementById('root')

if (rootEl) {
  render(() => <App />, rootEl)
} else {
  console.error('Cannot find the root element.')
}
