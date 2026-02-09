import { Page, Locator, expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class TopMenu extends BaseComponent {

    private get dropdownMenu() { return this.selector.locator('.oxd-dropdown-menu'); }

    constructor(page: Page) {
        super(page, page.getByRole('navigation', { name: 'Topbar Menu' }));
    }

    async clickTopMenuItem(menuItem: string): Promise<void> {
        await this.selector.byText(menuItem).click();
    }

    async clickDropdownMenuItem(menuItem: string): Promise<void> {
        await this.dropdownMenu.getByText(menuItem).click();
    }

    async expectDropdownMenuVisible(): Promise<void> {
        await expect(this.dropdownMenu).toBeVisible();
    }
}
