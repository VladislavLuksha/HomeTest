import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/specs/ui',
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['allure-playwright']],
  timeout: 30000,
});