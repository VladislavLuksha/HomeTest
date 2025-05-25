import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { credentials } from '../../config/config.js';

export async function loginByUser(page: Page, loginPage: LoginPage) {
  await page.goto('/');
  await loginPage.login(credentials.username, credentials.password);
}