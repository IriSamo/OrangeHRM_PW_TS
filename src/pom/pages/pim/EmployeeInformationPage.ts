import { Page } from '@playwright/test';
import { BasePageWithMainLayout } from '../BasePageWithMainLayout';

export class EmployeeInformationPage extends BasePageWithMainLayout {

  constructor(page: Page) {
    super(page);
  }
}
