import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data';
import { flow } from '../pom/flow';
  
  test('user can logout', async ({ loginPage }) => {
        await flow(loginPage).loginAs(env.username, env.password)   // → DashboardPage  
          .onHeader().logout()                                                  // → LoginPage
          .expectToHaveUrl({ contains: Endpoint.login })
          .run();
  });
