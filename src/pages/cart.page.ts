import { Page, Locator } from '@playwright/test';
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;

    constructor(protected page: Page) {
        super(page);
        this.cartItems = this.getElement('.cart_item');
        this.checkoutButton = this.getElement('[data-test="checkout"]');
    }

    async getCartItemsCount(): Promise<number> {
        return this.cartItems.count();
    }

    async ClickCheckoutButton(): Promise<void> {
        await this.checkoutButton.click();
    }
}