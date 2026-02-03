import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint, SideMenuItem, PimTopMenuItem } from '../test-data';

test(
    'User can navigate to the PIM', 
    async ({ loginPage, dashboardPage, employeeListPage }) => {

    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);

    await employeeListPage.expectToHaveUrl({ contains: Endpoint.employeeList });
});

test(
    'User can see Configuration dropdown menu', 
    async ({ loginPage, dashboardPage, employeeListPage }) => {
        
    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);
    await employeeListPage.pimTopMenu.clickTopMenuItem(PimTopMenuItem.Configuration);

    await employeeListPage.pimTopMenu.expectdropdownMenuVisible();
});
