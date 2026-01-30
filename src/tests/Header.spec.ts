import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data';
  
  test('user can logout', async ({ loginPage }) => {
    // test.slow();
    const dashboardPage = await loginPage.loginAs(env.username, env.password);
    const newLoginPage = await dashboardPage.header.logout();

    await newLoginPage.expectToHaveUrl({ contains: Endpoint.login });
  });