import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  readonly inventoryItems: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItems = this.getElement('.inventory_item');
    this.addToCartButtons = this.getElement('.inventory_item button');
    this.cartBadge = this.getElement('.shopping_cart_badge');
    this.sortDropdown = this.getElement('[data-test="product-sort-container"]');
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

  async sortBy(option: string) {
    await this.sortDropdown.selectOption(option);
  }

  async getPrices(): Promise<number[]> {
    const prices: number[] = [];
    const priceElements = this.page.locator('.inventory_item_price');
    const count = await priceElements.count();

    for (let i = 0; i < count; i++) {
      const text = await priceElements.nth(i).textContent();

      if (text) {
        prices.push(parseFloat(text.replace('$', '')));
      }
    }

    return prices;
  }
}