import '../pom/pages/registerPages';
import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pom/pages/LoginPage';

type BaseFixtures = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<BaseFixtures>({

  loginPage: async ({ page }, use) => {
    await page.goto('/');
    
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';
