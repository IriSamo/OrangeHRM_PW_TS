import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data';

test(
  'User can navigate to the Login Page', 
  async ({ loginPage }) => {

  await loginPage.expectToHaveUrl({ contains: Endpoint.login });
});

test(
  'User can login', 
  async ({ loginPage, dashboardPage }) => {
    
  await loginPage.loginAs(env.username, env.password);

  await dashboardPage.expectToHaveUrl({ contains: Endpoint.dashboard });
});
