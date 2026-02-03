import { Page } from '@playwright/test';
import { BasePimPage } from './BasePimPage';

export class EmployeeListPage extends BasePimPage {

  constructor(page: Page) {
    super(page);
  }
}
