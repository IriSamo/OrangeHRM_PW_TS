import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { BasePage } from "./BasePage";
import { TopMenu } from "../components/TopMenu";

export abstract class BasePageWithMainLayout extends BasePage {

  private _header?: Header;
  private _sideMenu?: SideMenu;
  private _topMenu?: TopMenu;

  get header(): Header {
    if (!this._header) {
      this._header = new Header(this.page);
    }
    return this._header;
  }
  get sideMenu(): SideMenu {
    if (!this._sideMenu) {
      this._sideMenu = new SideMenu(this.page);
    }
    return this._sideMenu;
  }
  get topMenu(): TopMenu {
    if (!this._topMenu) {
      this._topMenu = new TopMenu(this.page);
    }
    return this._topMenu;
  }
}
