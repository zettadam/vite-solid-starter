import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import './app.css'

const App = () => (
  <div class="app">
    <AppHeader />
    <main>
      <header>
        <h1>Screen One</h1>
      </header>
      <div class="content">
        <p>There is nothing to see here yet.</p>

        <div class="color-palette">
          <div class="blue-0">Blue 0</div>
          <div class="blue-1">Blue 1</div>
          <div class="blue-2">Blue 2</div>
          <div class="blue-3">Blue 3</div>
          <div class="blue-4">Blue 4</div>
          <div class="blue-5">Blue 5</div>
          <div class="blue-6">Blue 6</div>
          <div class="blue-7">Blue 7</div>
          <div class="blue-8">Blue 8</div>
          <div class="blue-9">Blue 9</div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
)

export default App
