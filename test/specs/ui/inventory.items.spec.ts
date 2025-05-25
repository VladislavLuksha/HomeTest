import { test, expect } from '@playwright/test';
import { loginByUser } from '../../../src/helpers/login.helper.js';

test('Verify inventory page shows 6 items', async ({ page }) => {
  await loginByUser(page);
  const items = await page.locator('.inventory_item').all();

  expect(items.length).toBe(6);
});