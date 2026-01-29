import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data'
import { flow } from '../pom/flow';

test.describe('Login Page', () => {

  test('user can navigate to the Login Page', async ({ loginPage }) => {

    await loginPage.expectToHaveUrl({ contains: Endpoint.login });
  });

  test('user can login', async ({ loginPage, dashboardPage }) => {
    await loginPage.loginAs(env.username, env.password);

    await dashboardPage.expectToHaveUrl({ contains: Endpoint.dashboard });
  });

  test('login', async ({ loginPage }) => {
    await (await loginPage
      .loginAs(env.username, env.password))
      .expectToHaveUrl({ contains: Endpoint.dashboard });
  });

  test('login FlowPage', async ({ loginPage }) => {
    await flow(loginPage).loginAs(env.username, env.password)   // → DashboardPage
      .expectToHaveUrl({ contains: Endpoint.dashboard })
      .run();
  });
});
