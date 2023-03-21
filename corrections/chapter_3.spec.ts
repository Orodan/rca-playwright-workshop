import { test, expect } from '@playwright/test';

test('it should have the correct title', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});

test('it should have the correct screenshot for light mode', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await page.emulateMedia({ colorScheme: 'light' });

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('it should have the correct screenshot for dark mode', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await page.emulateMedia({ colorScheme: 'dark' });

  await expect(page).toHaveScreenshot({ fullPage: true });
});
