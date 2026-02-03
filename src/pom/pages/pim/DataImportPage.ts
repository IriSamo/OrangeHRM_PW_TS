import { Page } from '@playwright/test';
import { BasePimPage } from './BasePimPage';

export class DataImportPage extends BasePimPage {

    private get downloadButton() { return this.byText('Download'); }

    constructor(page: Page) {
        super(page);
    }

    async downloadSampleCsv(): Promise<string> {
        return this.downloadFile('sample-data-import.csv', this.downloadButton);
    }
}