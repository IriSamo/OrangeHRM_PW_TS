// navigation/pageRegistry.ts – no page imports to avoid circular dependency
import { Page } from '@playwright/test';
import { Route } from './Route';
import { BasePage } from '../pages/BasePage';

export type PageCtor<T extends BasePage = BasePage> = new (page: Page) => T;

export const pageRegistry = {} as Record<Route, PageCtor<BasePage>>;

export function registerPage<R extends Route>(route: R, ctor: PageCtor<BasePage>): void {
  pageRegistry[route] = ctor;
}
