import { test, expect } from '../../base.test'
import { loginByUser } from '../../../src/helpers/login.helper';
import { credentials } from '../../../config/config';

test.describe('Inventory Page', () => {
  test.beforeEach(async ({ page }) => {
    await loginByUser(page, credentials);
  });

  test('Should display 6 inventory items', async ({ inventoryPage }) => {
    await test.step('Verify inventory count', async () => {
      const itemCount = await inventoryPage.getInventoryItemsCount(); 
      expect(itemCount).toBe(6);
    });
  });

  test('Should add first item to cart', async ({ inventoryPage }) => {
    await test.step('Add item to cart', async () => {
       await inventoryPage.addFirstItemToCart();
       const badge = await inventoryPage.getCartBadgeText();
       expect(badge).toBe('1');
    });
  });

  test('Should sort products by price low to high',  async ({ inventoryPage }) => {
    await inventoryPage.sortBy('lohi');

    await test.step('Verify prices are sorted ascending', async () => {
      const prices = await inventoryPage.getPrices();
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).toEqual(sorted);
    });
  });
});