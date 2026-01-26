import { Page } from '@playwright/test';
import { BasePageWithHeaderAndSideMenu } from './BasePageWithHeaderAndSideMenu';

export class DashboardPage extends BasePageWithHeaderAndSideMenu {

  constructor(page: Page) {
    super(page);
  }
}
