import { Page, Locator, expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class SideMenu extends BaseComponent {

  private get chevron(): Locator { return this.selector.button(); }

  constructor(page: Page) {
    super(page, page.getByRole('navigation', { name: 'Sidepanel' }));
  }

  private menuItem(name: string): Locator {
    return this.selector.linkByName(name);
  }

  async clickChevron(): Promise<void> {
    await this.chevron.click();
    await this.page.waitForTimeout(500);
  }

  async clickMenuItem(itemName: string): Promise<void> {
    await this.menuItem(itemName).click();
  }

  async expectSize(width: number, height: number): Promise<void> {
    const size = await this.element.elementSize(this.scope);

    expect(size.width).toEqual(width);
    expect(size.height).toEqual(height);
  }
}
