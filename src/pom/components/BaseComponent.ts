import { Locator, Page } from '@playwright/test';
import { BaseUi } from '../ui/BaseUi';

export abstract class BaseComponent extends BaseUi {
  protected readonly root: Locator;

protected constructor(page: Page, root: Locator) {
  super(page, root);
  this.root = root;
}
}
