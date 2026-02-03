import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';

test(
    'User can fold up and unfold side menu', 
    async ({ loginPage, dashboardPage }) => {

    await loginPage.loginAs(env.username, env.password);

    await dashboardPage.sideMenu.expectSize(256, 720);

    await dashboardPage.sideMenu.clickChevron();

    await dashboardPage.sideMenu.expectSize(83, 720);

    await dashboardPage.sideMenu.clickChevron();

    await dashboardPage.sideMenu.expectSize(256, 720);
});