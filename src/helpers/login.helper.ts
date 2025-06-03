import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { User } from '../interfaces/user';

export async function loginByUser(page: Page, user: User) {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.login(user.username, user.password);
}