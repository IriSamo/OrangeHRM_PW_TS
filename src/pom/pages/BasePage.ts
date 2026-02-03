import { Page, Locator, expect } from '@playwright/test';
import { BaseUi } from '../BaseUi';
import * as fs from 'fs';
import * as path from 'path';

type UrlExpectation =
  | { exact: string }
  | { contains: string }
  | { match: RegExp };

export abstract class BasePage extends BaseUi {

  private get mainTitle() { return this.bySelector('.orangehrm-main-title').or(this.bySelector('.orangehrm-login-title')); }

  protected constructor(page: Page) {
    super(page);
  }

  async expectToHaveUrl(expectation: UrlExpectation): Promise<void> {
    if ('exact' in expectation) {
      await expect(this.page).toHaveURL(expectation.exact);
    } else if ('contains' in expectation) {
      const escaped = expectation.contains.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      await expect(this.page).toHaveURL(new RegExp(escaped));
    } else {
      await expect(this.page).toHaveURL(expectation.match);
    }
  }

  async waitForReady(endpoint: string): Promise<void> {
    await this.page.waitForURL(new RegExp(endpoint));
  }

  async expectMainTitle(expectedTitle: string): Promise<void> {
    await expect(this.mainTitle).toHaveText(expectedTitle);
  }

  async downloadFile(fileName: string, downloadButton: Locator): Promise<string> {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      downloadButton.click()
    ]);

    const downloadPath = path.join(process.cwd(), 'downloaded-files', fileName);

    fs.mkdirSync(path.dirname(downloadPath), { recursive: true });

    await download.saveAs(downloadPath);

    return downloadPath;
  }
}
