import { Page, Locator, expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class PimTopMenu extends BaseComponent {

    private get dropdownMenu() { return this.bySelector('.oxd-dropdown-menu'); }

    constructor(page: Page) {
        super(page);
    }

    protected createRoot(): Locator {
        return this.navigationByName('Topbar Menu');
    }

    async clickTopMenuItem(menuItem: string): Promise<void> {
        await this.scope.getByText(menuItem).click();
    }

    async clickConfigurationMenuItem(menuItem: string): Promise<void> {
        await this.dropdownMenu.getByText(menuItem).click();
    }

    async expectdropdownMenuVisible(): Promise<void> {
        await expect(this.dropdownMenu).toBeVisible();
    }
}