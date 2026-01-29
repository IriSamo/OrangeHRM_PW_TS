import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { DashboardPage } from './DashboardPage';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private get usernameInput() { return this.inputByPlaceholder('Username'); }
    private get passwordInput() { return this.inputByPlaceholder('Password'); }
    private get loginButton() { return this.buttonByName('Login'); }

    async loginAs(user: string, pass: string): Promise<DashboardPage> {
        await this.page.waitForURL('**/login**');

        await this.usernameInput.waitFor();
        await this.usernameInput.pressSequentially(user);
        await this.passwordInput.pressSequentially(pass);
        await this.clickAndWaitForNavigation(this.loginButton, '**/dashboard**');

        return new DashboardPage(this.page);
    }
}
