import { Locator, Page } from '@playwright/test';
import { BaseUi } from '../ui/BaseUi';

export abstract class BaseComponent extends BaseUi {

  protected constructor(page: Page, root: Locator) {
    super(page, root);
  }

  protected get scope(): Locator {
    return this.root as Locator;
  }
}
