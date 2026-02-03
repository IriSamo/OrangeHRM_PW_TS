import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pom/pages/LoginPage';
import { DashboardPage } from '../pom/pages/DashboardPage';
import { EmployeeListPage } from '../pom/pages/pim/EmployeeListPage';
import { DataImportPage } from '../pom/pages/pim/DataImportPage';
import { AdminPage } from '../pom/pages/AdminPage';

type BaseFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  employeeListPage: EmployeeListPage;
  dataImportPage: DataImportPage;
  adminPage: AdminPage;
};

export const test = baseTest.extend<BaseFixtures>({

  loginPage: async ({ page }, use) => {
    await page.goto('/');
    
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  employeeListPage: async ({ page }, use) => {
    await use(new EmployeeListPage(page));
  },

  dataImportPage: async ({ page }, use) => {
    await use(new DataImportPage(page));
  },

  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
});

export { expect } from '@playwright/test';
