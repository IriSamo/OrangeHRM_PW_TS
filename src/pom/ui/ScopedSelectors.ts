import { Locator, Page } from '@playwright/test';

export class ScopedSelectors {

    constructor(private readonly page: Page, private readonly root?: Locator) { }

    private get scope(): Locator | Page {
        return this.root ?? this.page;
    }

    button() {
        return this.scope.getByRole('button');
    }

    buttonByName(name: string | RegExp) {
        return this.scope.getByRole('button', { name });
    }

    inputByPlaceholder(placeholder: string | RegExp) {
        return this.scope.getByPlaceholder(placeholder);
    }

    byText(text: string) {
        return this.scope.getByText(text);
    }

    locator(selector: string) {
        return this.scope.locator(selector);
    }

    navigationByName(name: string): Locator {
        return this.scope.getByRole('navigation', { name });
    }

    linkByName(name: string | RegExp): Locator {
        return this.scope.getByRole('link', { name });
    }
}
