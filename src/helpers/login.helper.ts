import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { credentials } from '../../config/config.js';

export async function loginByUser(page: Page) {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.login(credentials.username, credentials.password);
}