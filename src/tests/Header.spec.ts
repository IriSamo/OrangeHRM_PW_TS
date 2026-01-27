import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data';
  
  test('user can logout', async ({ loginPage, dashboardPage }) => {
    test.slow();
    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.header.logout();

    await loginPage.expectToHaveUrl({ contains: Endpoint.login });
  });