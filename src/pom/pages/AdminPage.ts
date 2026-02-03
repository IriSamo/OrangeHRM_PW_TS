import { Page } from '@playwright/test';
import { BasePageWithHeaderAndSideMenu } from './BasePageWithHeaderAndSideMenu';

export class AdminPage extends BasePageWithHeaderAndSideMenu {

  constructor(page: Page) {
    super(page);
  }
}
