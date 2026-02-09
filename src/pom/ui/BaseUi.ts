import { Page, Locator } from '@playwright/test';
import { DownloadActions } from './actions/DownloadActions';
import { NavigationActions } from './actions/NavigationActions';
import { ScopedSelectors } from './ScopedSelectors';
import { ElementInfo } from './ElementInfo';

export abstract class BaseUi {
  protected readonly page: Page;
  protected root?: Locator;

  private _selector?: ScopedSelectors;
  private _element?: ElementInfo;
  private _download?: DownloadActions;
  private _navigation?: NavigationActions;

  protected constructor(page: Page, root?: Locator) {
    this.page = page;
    this.root = root;
  }
  
  protected get selector(): ScopedSelectors {
    if (!this._selector) {
      this._selector = new ScopedSelectors(this.page, this.root);
    }
    return this._selector;
  }

  protected get element(): ElementInfo {
    if (!this._element) {
      this._element = new ElementInfo();
    }
    return this._element;
  }

  protected get download(): DownloadActions {
    if (!this._download) {
      this._download = new DownloadActions(this.page);
    }
    return this._download;
  }

  protected get navigation(): NavigationActions {
    if (!this._navigation) {
      this._navigation = new NavigationActions(this.page);
    }
    return this._navigation;
  }
}
