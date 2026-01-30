import { Page } from '@playwright/test';
import { BasePageWithHeaderAndSideMenu } from './BasePageWithHeaderAndSideMenu';
import { registerPage } from '../navigation/pageRegistry';
import { Route } from '../navigation/Route';

export class AdminPage extends BasePageWithHeaderAndSideMenu {

  constructor(page: Page) {
    super(page);
  }
}

registerPage(Route.Admin, AdminPage);