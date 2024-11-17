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

    test('Should close the story when close button is clicked', async ({ page }) => {
        await page.click('.story-circle-container')   
        await page.click('.story-close-button')
        await expect(page.locator('.story-viewer-container')).not.toBeVisible()
    })

    test('Should navigate to next story when clicking right side of an open story', async ({ page }) => {
        await page.click('.story-circle-container')
        await expect(page.locator('.story-media.story-index-0')).toBeVisible()
        await page.click('.story-right-panel')
        await expect(page.locator('.story-media.story-index-1')).toBeVisible()
    })

    test('Should navigate to prev story when clicking left side of an open story', async ({ page }) => {
        await page.click('.story-circle-container')
        await page.click('.story-right-panel')
        await page.click('.story-right-panel')
        await expect(page.locator('.story-media.story-index-2')).toBeVisible()
        await page.click('.story-left-panel')
        await expect(page.locator('.story-media.story-index-1')).toBeVisible()
    })

    test('Should automatically advance to next story after 5 seconds', async ({ page }) => {
        await page.click('.story-circle-container')
        await page.waitForTimeout(5000)
        await expect(page.locator('.story-media.story-index-1')).toBeVisible()
    })

    test('Should advance to next user stories when current user stories end', async ({ page }) => {
        await page.click('.story-circle-container:first-child')

        // First user has four stories in stories.json
        await page.click('.story-right-panel')
        await page.click('.story-right-panel')
        await page.click('.story-right-panel')
        await page.click('.story-right-panel')
        await expect(page.locator('.story-media.story-index-0')).toBeVisible()
    })

    test('Should move back to prev user stories when we click left panel on the first story of current user', async ({ page }) => {
        await page.click('.story-circle-container:last-child')
        await page.click('.story-left-panel')
        await expect(page.locator('.story-media.story-index-0')).toBeVisible()
    })

    test('Should close the story when we click right side on the last story of the last user', async ({ page }) => {
        await page.click('.story-circle-container:last-child')

        // Last user has two stories in stories.json
        await page.click('.story-right-panel')
        await page.click('.story-right-panel')

        await expect(page.locator('.story-viewer-container')).not.toBeVisible()
    })

})