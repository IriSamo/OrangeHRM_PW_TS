import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { PageData } from '../test-data';

test(
  'User can logout', 
  async ({ loginPage, dashboardPage }) => {

  await loginPage.loginAs(env.username, env.password);
  await dashboardPage.header.logout();

  await loginPage.expectToHaveUrl({ contains: PageData.login.endpoint });
  await loginPage.expectMainTitle(PageData.login.title);
});
