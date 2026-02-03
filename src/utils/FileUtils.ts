import * as fs from 'fs';
import * as path from 'path';
import { expect } from '@playwright/test';

export class FileUtils {
    static expectFileExists(filePath: string): void {
        expect(fs.existsSync(filePath)).toBeTruthy();
    }

    static expectFileNotEmpty(filePath: string): void {
        const stats = fs.statSync(filePath);
        expect(stats.size).toBeGreaterThan(0);
    }

    static expectCsvFormat(filePath: string): void {
        expect(path.extname(filePath)).toBe('.csv');
    }

    static getCsvHeaders(filePath: string): string[] {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.trim().split('\n');
        return lines[0].split(',');
    }

    static expectCsvHeadersToMatch(actualHeaders: string[], expectedHeaders: string[]): void {
        expect(actualHeaders).toEqual(expectedHeaders);
    }
}
