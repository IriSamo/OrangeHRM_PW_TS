import { test } from '../../fixtures/baseFixtures';
import { env } from '../../config/env';
import { SideMenuItem, PageData } from '../../test-data';

test(
    'User can navigate to the System Users page',
    { tag: '@navigation' },
    async ({ loginPage, dashboardPage, systemUsersPage }) => {
        
    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.Admin);

    await systemUsersPage.expectToHaveUrl({ contains: PageData.systemUsers.endpoint });
    await systemUsersPage.expectMainTitle(PageData.systemUsers.title);
});
