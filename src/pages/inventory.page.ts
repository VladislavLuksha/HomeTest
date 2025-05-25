import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async getInventoryItemsCount(): Promise<number> {
    return this.page.locator('.inventory_item').count();
  }

  async addFirstItemToCart() {
    await this.page.click('.inventory_item button');
  }

  async addItemToCartByIndex(index: number) {
    await this.page.locator('.inventory_item button').nth(index).click();
  }
  
  async getCartBadgeText(): Promise<string | null> {
    return this.page.locator('.shopping_cart_badge').textContent();
  }
}