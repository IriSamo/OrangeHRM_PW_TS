import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { flow } from '../pom/flow';

test('side menu', async ({ loginPage }) => {

    await flow(loginPage)
        .loginAs(env.username, env.password)  // → DashboardPage
        .onSideMenu().expectSize(256, 720)
        .clickChevron()
        .expectSize(83, 720)
        .clickChevron()
        .expectSize(256, 720)
        .run();
});
