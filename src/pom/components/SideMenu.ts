import { Page, Locator, expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { Route } from '../navigation/Route';
import { NavigationService } from '../navigation/NavigationService';

export class SideMenu extends BaseComponent {

  constructor(page: Page, private nav: NavigationService) {
    super(page);
  }

  protected createRoot(): Locator {
    return this.bySelector('nav[aria-label="Sidepanel"]');
  }

  private chevron(): Locator { return this.button(); }
  private menuItem(name: string): Locator { return this.linkByName(name); }

  async clickChevron(): Promise<void> {
    await this.chevron().click();
    await this.page.waitForTimeout(500);
  }

  async gotoPIMPage() {
    return this.nav.navigate(Route.PIM);
  }

  async gotoAdminPage() {
    return this.nav.navigate(Route.Admin);
  }

  async expectSize(width: number, height: number): Promise<void> {
    const size = await this.elementSize(this.root);

    expect(size.width).toEqual(width);
    expect(size.height).toEqual(height);
  }

  goTo<R extends Route>(route: R) {
    return this.nav.navigate(route);
  }
}
