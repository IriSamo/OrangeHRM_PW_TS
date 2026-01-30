import { Page } from '@playwright/test';
import { Route } from './Route';
import { pageRegistry } from './pageRegistry';

type PageByRoute<R extends Route> =
    InstanceType<(typeof pageRegistry)[R]>;

const SIDEPANEL = 'nav[aria-label="Sidepanel"]';

const routeToLinkLabel: Record<Route, string> = {
    [Route.Dashboard]: 'Dashboard',
    [Route.PIM]: 'PIM',
    [Route.Admin]: 'Admin',
};

export class NavigationService {
    constructor(private readonly page: Page) { }

    async navigate<R extends Route>(route: R): Promise<PageByRoute<R>> {
        const label = routeToLinkLabel[route];
        await this.page.locator(SIDEPANEL).getByRole('link', { name: label }).click();

        const PageCtor = pageRegistry[route] as new (page: Page) => PageByRoute<R>;
        return new PageCtor(this.page);
    }
}
