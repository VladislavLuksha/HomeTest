import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  readonly inventoryItems: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItems = this.getElement('.inventory_item');
    this.addToCartButtons = this.getElement('.inventory_item button');
    this.cartBadge = this.getElement('.shopping_cart_badge');
  }

  async getInventoryItemsCount(): Promise<number> {
    return this.inventoryItems.count();
  }

  async addFirstItemToCart() {
    await this.addToCartButtons.first().click();
  }

  async addItemToCartByIndex(index: number) {
    await this.addToCartButtons.nth(index).click();
  }

  async getCartBadgeText(): Promise<string | null> {
    return this.cartBadge.textContent();
  }
}