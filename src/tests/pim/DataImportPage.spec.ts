import { test } from '../../fixtures/baseFixtures';
import { env } from '../../config/env';
import { SideMenuItem, PimTopMenuItem, PimConfigurationMenuItem, PageData, ExpectedHeaders } from '../../test-data';
import { ExpectUtils } from '../../utils/ExpectUtils';

test(
    'User can navigate to the Data Import page',
    { tag: '@navigation' },
    async ({ loginPage, dashboardPage, systemUsersPage, dataImportPage }) => {

        await loginPage.loginAs(env.username, env.password);
        await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);
        await systemUsersPage.topMenu.clickTopMenuItem(PimTopMenuItem.Configuration);
        await systemUsersPage.topMenu.clickDropdownMenuItem(PimConfigurationMenuItem.DataImport);

        await dataImportPage.expectToHaveUrl({ contains: PageData.dataImport.endpoint });
        await dataImportPage.expectMainTitle(PageData.dataImport.title);
    });

test(
    'sream: User can download sample CSV file with expected content',
    { tag: ['@csv', '@stream'] },
    async ({ loginPage, dashboardPage, systemUsersPage, dataImportPage }) => {

        await loginPage.loginAs(env.username, env.password);
        await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);
        await systemUsersPage.topMenu.clickTopMenuItem(PimTopMenuItem.Configuration);
        await systemUsersPage.topMenu.clickDropdownMenuItem(PimConfigurationMenuItem.DataImport);

        const download = await dataImportPage.downloadCsv();
        const content = await dataImportPage.readCsv(download);

        ExpectUtils.expectCsvHeadersToMatchContent(content, ExpectedHeaders);
    });

test(
    'file: User can download sample CSV file with expected content',
    { tag: ['@csv', '@file'] },
    async ({ loginPage, dashboardPage, systemUsersPage, dataImportPage }) => {

        await loginPage.loginAs(env.username, env.password);
        await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);
        await systemUsersPage.topMenu.clickTopMenuItem(PimTopMenuItem.Configuration);
        await systemUsersPage.topMenu.clickDropdownMenuItem(PimConfigurationMenuItem.DataImport);

        const dataImportPath = await dataImportPage.saveCsv();

        ExpectUtils.expectExists(dataImportPath);
        ExpectUtils.expectNotEmpty(dataImportPath);
        ExpectUtils.expectCsvHeadersToMatchFile(dataImportPath, ExpectedHeaders);
    });