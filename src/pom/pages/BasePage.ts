import { Page, expect } from '@playwright/test';
import { BaseUi } from '../BaseUi';

export abstract class BasePage extends BaseUi {

  protected constructor(page: Page) {
    super(page);
  }

  async expectToHaveUrl(urlOrPattern: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(urlOrPattern);
  }

  async expectUrlContains(endpoint: string): Promise<void> {
    await expect
      .poll(() => this.page.url())
      .toContain(endpoint);
  }
}
