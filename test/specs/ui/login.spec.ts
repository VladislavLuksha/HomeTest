import { test, expect } from '../../base.test'
import { generateFakeUser } from '../../../src/data/test.data';
import { loginByUser } from '../../../src/helpers/login.helper';
import { credentials, lockedOutUser } from '../../../config/config';
import { User } from '../../../src/interfaces/user';

test.describe('Login tests', () => {
  test('Should show error for invalid login', async ({ loginPage, page }) => {
    const user: User = generateFakeUser();

    await test.step('Attempt login with invalid credentials', async () => {
      await loginByUser(page, user);
    });
  
    await test.step('Verify error message is displayed', async () => {
      const error = await loginPage.getErrorMessage();
      expect(error).toContain('Username and password do not match');
    });
  });

  test('Should login successfully and land on inventory page', async ({ page }) => {
    await test.step('Login with valid credentials', async () => {
      await loginByUser(page, credentials);
    });
  
    await test.step('Verify redirection to inventory page', async () => {
      await expect(page).toHaveURL(/inventory/);
    });
  });

  test('Should logout successfully', async ({ headerPage, page, loginPage }) => {
    await loginByUser(page, credentials);
  
    await test.step('Click burger menu and logout', async () => {
      await headerPage.logout();
    });

    await test.step('Verify redirection to login page', async () => {
      await expect(page).toHaveURL('/');
      await expect(loginPage.usernameInput).toBeVisible();
    });
  });

  test('Should show error for locked out user',  async ({ loginPage, page }) => {
    await test.step('Try to login as locked out user', async () => {
      await loginByUser(page, lockedOutUser);
    });

    await test.step('Verify error message', async () => {
      const error = await loginPage.getErrorMessage();
      expect(error).toContain('Sorry, this user has been locked out.');
    });
  });

  test('Should show error if username is missing', async ({ loginPage, page }) => {
    await page.goto('/');
    await loginPage.passwordInput.fill(credentials.password);
    await loginPage.loginButton.click();

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username is required');
  });

  test('Should show error if password is missing', async ({ loginPage, page }) => {
    await page.goto('/');
    await loginPage.usernameInput.fill(credentials.username);
    await loginPage.loginButton.click();

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Password is required');
  });

  test('Should show error if both fields are empty', async ({ loginPage, page }) => {
    await page.goto('/');
    await loginPage.loginButton.click();

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username is required');
  });
});