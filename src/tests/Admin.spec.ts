import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data';

test.describe('Admin', () => {

    test('user can navigate to the Admin page', async ({ loginPage }) => {
        const dashboardPage = await loginPage.loginAs(env.username, env.password);
        const adminPage = await dashboardPage.sideMenu.gotoAdminPage();

        await adminPage.waitForReady(Endpoint.admin);
        await adminPage.expectToHaveUrl({ contains: Endpoint.admin });
    });
});