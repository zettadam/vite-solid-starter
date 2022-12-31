import { describe, expect, test } from 'vitest'
import { screen, render } from '@solidjs/testing-library'

import App from '../App'

describe('App', () => {
  test('loads the main page', () => {
    render(App)

    expect(screen.getByText(/SolidJS Starter \(Vite\)/)).toBeInTheDocument()
    expect(screen.getByText(/© Company 2022/)).toBeInTheDocument()
  })
})
