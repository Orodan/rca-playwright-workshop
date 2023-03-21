import { test, expect } from '@playwright/test';

test('test', async ({ page, isMobile }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByPlaceholder('Search docs').fill('locators');
  await page.waitForResponse(/^https:\/\/.*.algolia.net\/1\/indexes\/\*\/queries\?/);

  await page.getByPlaceholder('Search docs').press('Enter');

  await page
    .getByRole('paragraph')
    .filter({ hasText: "Locators are the central piece of Playwright's auto-waiting and retry-ability. I" })
    .getByRole('link', { name: 'Locator' })
    .click();

  if (isMobile) {
    await page.getByRole('button', { name: 'On this page' }).click();
  }

  await page.getByRole('link', { name: 'clear', exact: true }).click();

  await expect(page).toHaveURL('https://playwright.dev/docs/api/class-locator#locator-clear');
});
