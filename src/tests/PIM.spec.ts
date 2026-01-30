import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint } from '../test-data';
import { Route } from '../pom/navigation/Route';
import { PIMPage } from '../pom/pages/PIMPage';

test.describe('Configuration', () => {

    test('user can navigate to the PIM', async ({ loginPage }) => {
        const dashboardPage = await loginPage.loginAs(env.username, env.password);
        const pimPage = await dashboardPage.sideMenu.gotoPIMPage();

        await pimPage.expectToHaveUrl({ contains: Endpoint.pim });
    });

    test(' navigate to the PIM', async ({ loginPage}) => {
        const dashboardPage = await loginPage.loginAs(env.username, env.password);
        const pimPage = await dashboardPage.sideMenu.goTo(Route.PIM);

        await pimPage.expectToHaveUrl({ contains: Endpoint.pim });
    });

    test(' navigate to the PIM Configuration tab', async ({ loginPage }) => {
        const dashboardPage =  await loginPage.loginAs(env.username, env.password);
        const pimPage = (await dashboardPage.sideMenu.gotoPIMPage()) as PIMPage;
    

        await pimPage.clickTopbarMenuItem('Configuration');

    });

        test('user can navigate to the Data Import tab', async ({ loginPage}) => {
        const dashboardPage = await loginPage.loginAs(env.username, env.password);
        const pimPage = (await dashboardPage.sideMenu.gotoPIMPage()) as PIMPage;
        await pimPage.waitForReady(Endpoint.pim);


        await pimPage.expectToHaveUrl({ contains: Endpoint.pim });

        await pimPage.clickTopbarMenuItem('Configuration');
        await pimPage.clickDropdownMenuItem('Data Import');

        await pimPage.expectMainTitle('Data Import');
    });
});
