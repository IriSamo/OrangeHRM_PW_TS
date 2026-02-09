import { Page, expect } from '@playwright/test';
import { BaseUi } from '../ui/BaseUi';

type UrlExpectation =
  | { exact: string }
  | { contains: string }
  | { match: RegExp };

export abstract class BasePage extends BaseUi {

  private get mainTitle() { 
    return this.selector.locator('.orangehrm-main-title')
    .or(this.selector.locator('.orangehrm-login-title'))
    .or(this.selector.locator('.oxd-table-filter-title'));
  }

  protected constructor(page: Page) {
    super(page);
  }

  async expectToHaveUrl(expectation: UrlExpectation): Promise<void> {
    if ('exact' in expectation) {
      await expect(this.page).toHaveURL(expectation.exact);
    } else if ('contains' in expectation) {
      const escaped = expectation.contains.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      await expect(this.page).toHaveURL(new RegExp(escaped));
    } else {
      await expect(this.page).toHaveURL(expectation.match);
    }
  }

  async expectMainTitle(expectedTitle: string): Promise<void> {
    this.mainTitle.waitFor();
    await expect(this.mainTitle).toHaveText(expectedTitle);
  }
}
