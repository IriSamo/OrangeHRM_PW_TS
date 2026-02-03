import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {

  private get userMenuButton(): Locator { return this.bySelector('.oxd-userdropdown-icon'); }
  private get logoutItem(): Locator { return this.bySelector('.oxd-userdropdown-link').filter({ hasText: 'Logout' }); }

  constructor(page: Page) {
    super(page);
  }

  protected createRoot(): Locator {
    return this.bySelector('header');
  }

  async logout(): Promise<void> {
    await this.userMenuButton.click();
    await this.logoutItem.click();
  }
}
