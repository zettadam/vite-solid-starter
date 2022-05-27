import { PlaywrightTestConfig } from '@playwright/test'

// const { devices } = require('@playwright/test')

const SCHEME = process.env.CI ? 'http' : 'https'
const HOST = '127.0.0.1'
const PORT = 4173

const BASE_URL = `${SCHEME}://${HOST}:${PORT}`

const XXL_VIEWPORT = { width: 1920, height: 1080 }

const config: PlaywrightTestConfig = {
  use: {
    baseURL: BASE_URL,
    headless: true,
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: XXL_VIEWPORT,
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        viewport: XXL_VIEWPORT,
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: XXL_VIEWPORT,
      },
    },
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // }
  ],
  testDir: './tests',
}

export default config
