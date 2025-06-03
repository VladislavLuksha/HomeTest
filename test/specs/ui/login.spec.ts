import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/login.page';
import { generateFakeUser } from '../../../src/data/test.data';
import { loginByUser } from '../../../src/helpers/login.helper';
import { HeaderPage } from '../../../src/pages/header.page';
import { credentials } from '../../../config/config';
import { User } from '../../../src/interfaces/user';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('should show error for invalid login', async ({ page }) => {
    const user: User = generateFakeUser();

    await test.step('Attempt login with invalid credentials', async () => {
      await loginByUser(page, user);
    });
  
    await test.step('Verify error message is displayed', async () => {
      const error = await loginPage.getErrorMessage();
      expect(error).toContain('Username and password do not match');
    });
  });

  test('should login successfully and land on inventory page', async ({ page }) => {
    await test.step('Login with valid credentials', async () => {
      await loginByUser(page, credentials);
    });
  
    await test.step('Verify redirection to inventory page', async () => {
      await expect(page).toHaveURL(/inventory/);
    });
  });

  test('should logout successfully', async ({ page }) => {
    const headerPage = new HeaderPage(page);
    await loginByUser(page, credentials);
  
    await test.step('Click burger menu and logout', async () => {
      await headerPage.logout();
    });

    await test.step('Verify redirection to login page', async () => {
      await expect(page).toHaveURL('/');
      await expect(loginPage.usernameInput).toBeVisible();
    });
  });
});