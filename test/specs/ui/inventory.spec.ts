import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../../src/pages/inventory.page';
import { LoginPage } from '../../../src/pages/login.page';
import { loginByUser } from '../../../src/helpers/login.helper';

test.describe('Inventory Page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginByUser(page, loginPage);
  });

  test('should display 6 inventory items', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const itemCount = await inventoryPage.getInventoryItemsCount();
    expect(itemCount).toBe(6);
  });

  test('should add first item to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstItemToCart();
    const badge = await inventoryPage.getCartBadgeText();
    expect(badge).toBe('1');
  });
});