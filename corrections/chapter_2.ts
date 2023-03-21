import playwright from 'playwright';

const run = async (browserType: 'firefox' | 'chromium') => {
  const contextOption: playwright.BrowserContextOptions = {
    ...playwright.devices['Pixel 4']
  };

  if (browserType === 'firefox') {
    contextOption.isMobile = false;
  }

  const browser = await playwright[browserType].launch({ headless: false });
  const mobileContext = await browser.newContext(contextOption)
  const page = await mobileContext.newPage();
  const browserTypeName = browser.browserType().name()

  await page.goto('https://playwright.dev');

  await page.emulateMedia({
    colorScheme: 'dark'
  });

  await page.screenshot({
    path: `src/screenshot/${browserTypeName}_homepage.png`,
    fullPage: true
  });

  console.log(await page.title());

  await browser.close();
};

Promise.all([
  run('firefox'),
  run('chromium')
])