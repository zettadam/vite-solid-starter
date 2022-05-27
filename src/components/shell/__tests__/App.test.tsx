import { describe, expect, test } from 'vitest'
import { render, screen } from 'solid-testing-library'

import App from '../App'

describe('App', () => {
  test('loads the main page', () => {
    render(App)

    expect(screen.getByText(/SolidJS Starter \(Vite\)/))
    expect(screen.getByText(/© Company 2022/))
  })
})
