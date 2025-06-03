import { Page, Locator } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    protected getElement(selector: string): Locator {
        return this.page.locator(selector);
    }

    async click(selector: string): Promise<void> {
        await this.getElement(selector).click();
    }

    async fill(selector: string, value: string): Promise<void> {
        await this.getElement(selector).fill(value);
    }

    async getText(selector: string): Promise<string | null> {
        return this.getElement(selector).textContent();
    }
}