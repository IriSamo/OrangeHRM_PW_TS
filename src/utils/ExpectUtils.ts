import * as fs from 'fs';
import { expect } from '@playwright/test';
import { CsvUtils } from './CsvUtils';

export class ExpectUtils {

    static expectExists(filePath: string): void {
        expect(fs.existsSync(filePath)).toBeTruthy();
    }

    static expectNotEmpty(filePath: string): void {
        const stats = fs.statSync(filePath);
        expect(stats.size).toBeGreaterThan(0);
    }

    static expectCsvHeadersToMatchFile(filePath: string, expectedHeaders: string[]): void {
        const actualHeaders = CsvUtils.getCsvHeadersFromFile(filePath);
        expect(actualHeaders).toEqual(expectedHeaders);
    }

    static expectCsvHeadersToMatchContent(content: string, expectedHeaders: string[]): void {
        const actualHeaders = CsvUtils.getCsvHeadersFromText(content);
        expect(actualHeaders).toEqual(expectedHeaders);
    }
}
