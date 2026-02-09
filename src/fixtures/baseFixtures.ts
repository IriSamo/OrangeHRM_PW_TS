import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pom/pages/LoginPage';
import { DashboardPage } from '../pom/pages/DashboardPage';
import { EmployeeInformationPage } from '../pom/pages/pim/EmployeeInformationPage';
import { DataImportPage } from '../pom/pages/pim/DataImportPage';
import { SystemUsersPage } from '../pom/pages/admin/SystemUsersPage';

type BaseFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  employeeInformationPage: EmployeeInformationPage;
  dataImportPage: DataImportPage;
  systemUsersPage: SystemUsersPage;
};

export const test = baseTest.extend<BaseFixtures>({

  loginPage: async ({ page }, use) => {
    await page.goto('/');
    
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  employeeInformationPage: async ({ page }, use) => {
    await use(new EmployeeInformationPage(page));
  },

  dataImportPage: async ({ page }, use) => {
    await use(new DataImportPage(page));
  },

  systemUsersPage: async ({ page }, use) => {
    await use(new SystemUsersPage(page));
  },
});

export { expect } from '@playwright/test';
