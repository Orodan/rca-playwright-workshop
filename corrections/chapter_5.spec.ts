import { expect, test } from '@playwright/test';

test.use({
  headless: true,
});

test.beforeEach(async ({ page }) => {
  await page.route('https://accounts.google.com/ServiceLogin/webreauth', (route) => {
    route.fulfill({
      status: 302,
      headers: {
        Location: 'https://workshop-playwright-server.vercel.app?token=<3WindowsVista<3',
      },
    });
  });
});

test('it should get the last secret phrase', async ({ page }) => {
  await page.goto('https://workshop-playwright-server.vercel.app');

  await page.getByLabel('Login').fill('your.name');
  await page.getByLabel('Password').fill('pwd1');

  await page.getByText('Connect').click();

  await page.waitForURL(/^https:\/\/workshop-playwright-server\.vercel\.app/);

  await expect(page.getByRole('heading')).toHaveText("You're in Microsoft deep secrets page");

  await expect(page).toHaveScreenshot();
});
