import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { InventoryPage } from '../src/pages/inventory.page';
import { HeaderPage } from '../src/pages/header.page';
import { CartPage } from '../src/pages/cart.page';

type Pages = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    headerPage: HeaderPage;
    cartPage: CartPage;
};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
      await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
      await use(new InventoryPage(page));
    },
    headerPage: async ({ page }, use) => {
      await use(new HeaderPage(page));
    },
    cartPage: async ({ page }, use) => {
      await use(new CartPage(page));
    },
});
  
export { expect } from '@playwright/test';