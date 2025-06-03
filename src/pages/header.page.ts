import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HeaderPage extends BasePage {
  readonly burgerMenuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.burgerMenuButton = this.getElement('#react-burger-menu-btn');
    this.logoutLink = this.getElement('#logout_sidebar_link');
  }

  async openMenu() {
    await this.burgerMenuButton.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutLink.click();
  }
}