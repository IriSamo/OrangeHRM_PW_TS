import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { LoginPage } from '../pages/LoginPage';

export class Header extends BaseComponent {

  constructor(page: Page) {
    super(page);
  }

  protected createRoot(): Locator {
    return this.bySelector('header.oxd-topbar');
  }

  private get userMenuButton(): Locator {
    return this.bySelector('.oxd-userdropdown-icon');
  }

  private get logoutItem(): Locator {
    return this.bySelector('.oxd-userdropdown-link').filter({ hasText: 'Logout' });
  }

  async logout(): Promise<LoginPage> {
    await this.userMenuButton.click();
    await this.logoutItem.click();

    return new LoginPage(this.page);
  }
}
