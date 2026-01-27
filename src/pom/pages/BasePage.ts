import { Page, expect } from '@playwright/test';
import { BaseUi } from '../BaseUi';

  type UrlExpectation =
  | { exact: string }
  | { contains: string }
  | { match: RegExp };

export abstract class BasePage extends BaseUi {

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
}
