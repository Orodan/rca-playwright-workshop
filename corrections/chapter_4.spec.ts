import { test, expect } from '@playwright/test';

// test.use({
//   headless: false
// })

test('it should click on getting started', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.waitForLoadState('networkidle');

  await page.getByText('Get started').click();

  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('it should search for locators', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.waitForLoadState('networkidle');

  await page.getByText('Get started').click();

  await page.getByLabel('Search').click();

  await page.getByPlaceholder('Search docs').fill('locators');
  await page.waitForResponse(/^https:\/\/.*.algolia.net\/1\/indexes\/\*\/queries\?/);

  await page.keyboard.press('Enter');

  await expect(page).toHaveURL('https://playwright.dev/docs/locators');
});
