import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { BasePage } from "./BasePage";


export abstract class BasePageWithHeaderAndSideMenu extends BasePage {

  readonly header = new Header(this.page);
  readonly sideMenu = new SideMenu(this.page);
}
