import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src',
  outputDir: './test-results',
  retries: process.env.CI ? 1 : 0,
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },
    {
      name: 'Pixel 4',
      use: {
        ...devices['Pixel 4']
      }
    }
  ]
};

export default config;
