import { Page, Locator, Download, expect } from '@playwright/test';
import path from 'path/win32';
import { Readable } from 'stream';

export class DownloadActions {

  constructor(private page: Page) { }

  async trigger(locator: Locator): Promise<Download> {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      locator.click()
    ]);

    return download;
  }

  async save(download: Download, fileName: string = download.suggestedFilename()): Promise<string> {
    const downloadPath = path.join(process.cwd(), 'downloaded-files', fileName);
    await download.saveAs(downloadPath);

    return downloadPath;
  }

  async saveFrom(locator: Locator, fileName?: string): Promise<string> {
    const download = await this.trigger(locator);
    const downloadPath = path.join(process.cwd(), 'downloaded-files', fileName || download.suggestedFilename());
    await download.saveAs(downloadPath);

    return downloadPath;
  }

  async getStream(download: Download): Promise<Readable> {
    const stream = await download.createReadStream();
    if (!stream) throw new Error('Stream is null');

    return stream;
  }
}
