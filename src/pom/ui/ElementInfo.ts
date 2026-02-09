import { Locator } from '@playwright/test';

export type ElementSize = {
    width: number;
    height: number;
};

export class ElementInfo {

    constructor() { }

    async elementSize(locator: Locator): Promise<ElementSize> {
        await locator.waitFor();

        return await locator.evaluate(el => ({
            width: el.clientWidth,
            height: el.clientHeight,
        }));
    }
}
