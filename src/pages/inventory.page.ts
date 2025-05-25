import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async getInventoryItemsCount(): Promise<number> {
    return this.page.locator('.inventory_item').count();
  }

  async addFirstItemToCart() {
    await this.page.click('.inventory_item button');
  }

  async getCartBadgeText(): Promise<string> {
    return this.page.locator('.shopping_cart_badge').textContent();
  }
}