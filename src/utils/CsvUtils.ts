import * as fs from 'fs';

export class CsvUtils {

    static getCsvHeadersFromFile(path: string): string[] {
        const content = fs.readFileSync(path, 'utf-8');
        return this.getHeadersFromText(content);
    }

    static getCsvHeadersFromText(text: string): string[] {
        return this.getHeadersFromText(text);
    }

    private static getHeadersFromText(text: string): string[] {
        const firstLine = text.trim().split('\n')[0];
        return firstLine.split(',');
    }
}
