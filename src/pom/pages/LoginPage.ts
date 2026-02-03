import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    private get usernameInput() { return this.inputByPlaceholder('Username'); }
    private get passwordInput() { return this.inputByPlaceholder('Password'); }
    private get loginButton() { return this.buttonByName('Login'); }

    constructor(page: Page) {
        super(page);
    }

    async loginAs(user: string, pass: string): Promise<void> {
        await this.usernameInput.pressSequentially(user);
        await this.passwordInput.pressSequentially(pass);
        await this.clickAndWaitForNavigation(this.loginButton, '**/dashboard**');
    }
}
