import { Download, Page } from '@playwright/test';
import { BasePageWithMainLayout } from '../BasePageWithMainLayout';
import { StreamUtils } from '../../../utils/StreamUtils';

export class DataImportPage extends BasePageWithMainLayout {

    private get downloadButton() { return this.selector.byText('Download'); }

    constructor(page: Page) {
        super(page);
    }

    async downloadCsv(): Promise<Download> {
        return await this.download.trigger(this.downloadButton);
    }

    async saveCsv(): Promise<string> {
        return this.download.save(await this.downloadCsv());
    }

    async readCsv(download: Download): Promise<string> {
        const stream = await this.download.getStream(download);
        const text = await StreamUtils.readAllText(stream);

        if (!text || text.trim().length === 0) {
            throw new Error('Downloaded CSV is empty');
        }

        return text;
    }
}
