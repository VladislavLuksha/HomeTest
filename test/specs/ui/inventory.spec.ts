import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../../src/pages/inventory.page';
import { loginByUser } from '../../../src/helpers/login.helper';
import { credentials } from '../../../config/config';

test.describe('Inventory Page', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    await loginByUser(page, credentials);
    inventoryPage = new InventoryPage(page);
  });

  test('should display 6 inventory items', async ({ page }) => {
    await test.step('Verify inventory count', async () => {
      const itemCount = await inventoryPage.getInventoryItemsCount(); 
      expect(itemCount).toBe(6);
    });
  });

  test('should add first item to cart', async ({ page }) => {
    await test.step('Add item to cart', async () => {
       await inventoryPage.addFirstItemToCart();
       const badge = await inventoryPage.getCartBadgeText();
       expect(badge).toBe('1');
    });
  });
});