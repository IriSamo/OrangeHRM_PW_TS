import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { PageData } from '../test-data';

test(
  'User can navigate to the Login page',
  { tag: '@navigation' },
  async ({ loginPage }) => {

  await loginPage.expectToHaveUrl({ contains: PageData.login.endpoint });
  await loginPage.expectMainTitle(PageData.login.title);
});

test(
  'User can login', 
  async ({ loginPage, dashboardPage }) => {
    
  await loginPage.loginAs(env.username, env.password);

  await dashboardPage.expectToHaveUrl({ contains: PageData.dashboard.endpoint });
});
