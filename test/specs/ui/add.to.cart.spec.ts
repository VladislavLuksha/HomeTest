import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../../src/pages/inventory.page.js';
import { loginByUser } from '../../../src/helpers/login.helper.js';

test('Add Item to Cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await loginByUser(page);
  await inventoryPage.addFirstItemToCart();
  const badge = await inventoryPage.getCartBadgeText();
  
  expect(badge).toBe('1');
});