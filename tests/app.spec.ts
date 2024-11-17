import { test, expect } from '@playwright/test'


test.describe('Instagram Stories', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Should display list of story circles on load', async ({ page }) => {
        await expect(page.locator('.story-circle-container').first()).toBeVisible()
    })

    test('Should open a user story when a story circle is clicked', async ({ page }) => {
        await page.click('.story-circle-container:first-child')
        await expect(page.locator('.story-viewer-container')).toBeVisible()
        await expect(page.locator('.story-media')).toBeVisible()
    })
})