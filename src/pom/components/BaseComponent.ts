import { Locator, Page } from '@playwright/test';
import { BaseUi } from '../BaseUi';

export abstract class BaseComponent extends BaseUi {
  protected readonly root: Locator;

  protected constructor(page: Page) {
    super(page);
    this.root = this.createRoot();
  }

  protected abstract createRoot(): Locator;
}


