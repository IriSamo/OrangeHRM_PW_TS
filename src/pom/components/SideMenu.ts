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

  async clickChevron(): Promise<SideMenu> {
    await this.chevron().click();
    await this.page.waitForTimeout(500);
    
    return this;
  }

  async expectSize(width: number, height: number): Promise<SideMenu> {
    const size = await this.elementSize(this.root);

    expect(size.width).toEqual(width);
    expect(size.height).toEqual(height);
    
    return this;
  }
}
