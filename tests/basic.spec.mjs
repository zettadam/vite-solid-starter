import { test, expect } from '@playwright/test'

test.describe('Basic', () => {
  test('Screen Structure', async ({ page }) => {
    await page.goto('/')

    const appHeader = page.locator('header.app-header')
    const appFooter = page.locator('footer.app-footer')
    const main = page.locator('main')

    await expect(appHeader.locator('h1')).toContainText(
      'SolidJS Starter (Vite)'
    )
    await expect(main.locator('.main-heading')).toContainText('Airports')
    await expect(appFooter.locator('.copyright')).toContainText(
      '© Company 2022'
    )
  })
})
