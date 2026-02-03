import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint, SideMenuItem } from '../test-data';

test(
    'User can navigate to the Admin page', 
    async ({ loginPage, dashboardPage, adminPage }) => {
        
    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.Admin);

    await adminPage.expectToHaveUrl({ contains: Endpoint.admin });
});
