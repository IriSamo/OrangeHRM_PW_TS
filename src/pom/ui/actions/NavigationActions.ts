import { Locator, Page } from "@playwright/test";

export class NavigationActions {
  constructor(private page: Page) { }

  async clickAndWaitForNavigationToUrl(button: Locator, urlPattern: string | RegExp) {
    await Promise.all([
      this.page.waitForURL(urlPattern),
      button.click(),
    ]);
  }
}
