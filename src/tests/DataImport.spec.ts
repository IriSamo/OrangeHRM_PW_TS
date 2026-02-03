import { test } from '../fixtures/baseFixtures';
import { env } from '../config/env';
import { Endpoint, SideMenuItem, PimTopMenuItem, PimConfigurationMenuItem, ExpectedHeaders } from '../test-data';
import { FileUtils } from '../utils/FileUtils';

test(
    'User can navigate to the Data Import page', 
    async ({ loginPage, dashboardPage, employeeListPage, dataImportPage }) => {

    await loginPage.loginAs(env.username, env.password);
    await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);
    await employeeListPage.pimTopMenu.clickTopMenuItem(PimTopMenuItem.Configuration);
    await employeeListPage.pimTopMenu.clickConfigurationMenuItem(PimConfigurationMenuItem.DataImport);

    await dataImportPage.expectToHaveUrl({ contains: Endpoint.dataImport });
    await dataImportPage.expectMainTitle('Data Import');
});

test(
    'User can download sample CSV file and verify content',
    { tag: '@csv' },
    async ({ loginPage, dashboardPage, employeeListPage, dataImportPage }) => {

        await loginPage.loginAs(env.username, env.password);
        await dashboardPage.sideMenu.clickMenuItem(SideMenuItem.PIM);
        await employeeListPage.pimTopMenu.clickTopMenuItem(PimTopMenuItem.Configuration);
        await employeeListPage.pimTopMenu.clickConfigurationMenuItem(PimConfigurationMenuItem.DataImport);

        const dataImportPath = await dataImportPage.downloadSampleCsv();

        FileUtils.expectFileExists(dataImportPath);
        FileUtils.expectFileNotEmpty(dataImportPath);
        FileUtils.expectCsvFormat(dataImportPath);

        const actualHeaders = FileUtils.getCsvHeaders(dataImportPath);
        
        FileUtils.expectCsvHeadersToMatch(actualHeaders, ExpectedHeaders);
    });