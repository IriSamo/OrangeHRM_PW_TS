import { Page } from '@playwright/test';
import { BasePageWithMainLayout } from './BasePageWithMainLayout';

export class DashboardPage extends BasePageWithMainLayout {

  constructor(page: Page) {
    super(page);
  }
}
