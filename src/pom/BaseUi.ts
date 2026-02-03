import { Page, Locator } from '@playwright/test';

export type ElementSize = {
  width: number;
  height: number;
};

export abstract class BaseUi {
  protected readonly page: Page;
  protected readonly root?: Locator;

  protected constructor(page: Page, root?: Locator) {
    this.page = page;
    this.root = root;
  }

  protected get scope(): Locator | Page {
    return this.root ?? this.page;
  }

  protected button(): Locator {
    return this.scope.getByRole('button');
  }
  protected buttonByName(name: string | RegExp): Locator {
    return this.scope.getByRole('button', { name });
  }

  protected inputByPlaceholder(placeholder: string | RegExp): Locator {
    return this.scope.getByPlaceholder(placeholder);
  }

  protected navigationByName(name: string): Locator {
    return this.scope.getByRole('navigation', { name });
  }

  protected linkByName(name: string | RegExp): Locator {
    return this.scope.getByRole('link', { name });
  }

  protected bySelector(selector: string): Locator {
    return this.scope.locator(selector);
  }

  protected byText(text: string): Locator {
    return this.scope.getByText(text);
  }

  protected async elementSize(locator: Locator): Promise<ElementSize> {
    await locator.waitFor();

    return await locator.evaluate(el => ({
      width: el.clientWidth,
      height: el.clientHeight,
    }));
  }

  protected async clickAndWaitForNavigation(button: Locator, urlPattern: string | RegExp): Promise<void> {
    await Promise.all([
      this.page.waitForURL(urlPattern),
      button.click(),
    ]);
  }
}
