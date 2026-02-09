import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { BasePage } from "./BasePage";
import { TopMenu } from "../components/TopMenu";

export abstract class BasePageWithMainLayout extends BasePage {

  readonly header = new Header(this.page);
  readonly sideMenu = new SideMenu(this.page);
  readonly topMenu = new TopMenu(this.page);
}
