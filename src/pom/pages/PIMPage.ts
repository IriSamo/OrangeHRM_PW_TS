import { Page } from '@playwright/test';
import { BasePageWithHeaderAndSideMenu } from './BasePageWithHeaderAndSideMenu';
import { registerPage } from '../navigation/pageRegistry';
import { Route } from '../navigation/Route';

export class PIMPage extends BasePageWithHeaderAndSideMenu {

  private get topbarMenu() { return this.bySelector('nav[aria-label="Topbar Menu"]'); }
  private get dropdownMenu() { return this.bySelector('.oxd-dropdown-menu'); }


  constructor(page: Page) {
    super(page);
  }

  async clickTopbarMenuItem(menuItem: string): Promise<void> {
    await this.topbarMenu.getByText(menuItem).click();
  }

  async clickDropdownMenuItem(menuItem: string): Promise<void> {
    await this.dropdownMenu.getByText(menuItem).click();
  }
}

registerPage(Route.PIM, PIMPage);