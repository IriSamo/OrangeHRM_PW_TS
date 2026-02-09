import { Page } from '@playwright/test';
import { BasePageWithMainLayout } from '../BasePageWithMainLayout';

export class SystemUsersPage extends BasePageWithMainLayout {

  constructor(page: Page) {
    super(page);
  }
}
