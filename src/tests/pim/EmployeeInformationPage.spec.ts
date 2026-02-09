import { test } from '../../fixtures/baseFixtures';
import { env } from '../../config/env';
import { SideMenuItem, PimTopMenuItem, PageData } from '../../test-data';

test(
    'User can navigate to the Employee Information page',
    { tag: '@navigation' },
    async ({ loginPage, dashboardPage, employeeInformationPage }) => {

    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);

    await employeeInformationPage.expectToHaveUrl({ contains: PageData.employeeInformation.endpoint });
    await employeeInformationPage.expectMainTitle(PageData.employeeInformation.title);
});

test(
    'User can see Configuration dropdown menu', 
    async ({ loginPage, dashboardPage, employeeInformationPage }) => {
        
    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);
    await employeeInformationPage.topMenu.clickTopMenuItem(PimTopMenuItem.Configuration);

    await employeeInformationPage.topMenu.expectDropdownMenuVisible();
});
