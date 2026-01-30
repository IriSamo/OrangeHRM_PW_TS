import { NavigationService } from "../navigation/NavigationService";
import { SideMenu } from "../components/SideMenu";
import { Header } from "../components/Header";
import { BasePage } from "./BasePage";


export abstract class BasePageWithHeaderAndSideMenu extends BasePage {
  protected readonly navigation = new NavigationService(this.page);

  readonly header = new Header(this.page);
  readonly sideMenu = new SideMenu(this.page, this.navigation);
}
