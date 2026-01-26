import { Page, Locator, expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class SideMenu extends BaseComponent {

  constructor(page: Page) {
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

  async openDashboard(): Promise<void> {
    await this.menuItem('Dashboard').click();
  }

  async openAdmin(): Promise<void> {
    await this.menuItem('Admin').click();
  }

  async expectSize(width: number, height: number): Promise<void> {
    const size = await this.elementSize(this.root);

    expect(size.width).toEqual(width);
    expect(size.height).toEqual(height);
  }
}
