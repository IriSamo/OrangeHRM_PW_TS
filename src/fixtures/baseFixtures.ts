import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pom/pages/LoginPage';
import { DashboardPage } from '../pom/pages/DashboardPage';

type BaseFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

export const test = baseTest.extend<BaseFixtures>({

  loginPage: async ({ page }, use) => {
    await page.goto('/');
    
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export { expect } from '@playwright/test';
