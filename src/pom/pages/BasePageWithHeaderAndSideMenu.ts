import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';

export abstract class BasePageWithHeaderAndSideMenu extends BasePage {

    get header(): Header { return new Header(this.page); }
    get sideMenu(): SideMenu { return new SideMenu(this.page); }
}
