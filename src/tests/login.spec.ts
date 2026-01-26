import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data';

test.describe('Login Page', () => {

  test('user can navigate to the Login Page', async ({ loginPage }) => {

    await loginPage.expectUrlContains(Endpoint.login);
  });

  test('user can login', async ({ loginPage, dashboardPage }) => {
    await loginPage.loginAs(env.username, env.password);

    await dashboardPage.expectUrlContains(Endpoint.dashboard);
  });

});
