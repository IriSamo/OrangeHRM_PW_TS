import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { LoginPage } from './LoginPage';

export abstract class BasePageWithHeaderAndSideMenu extends BasePage {

      protected header: Header | undefined;
      protected sideMenu: SideMenu | undefined;

    async onHeader(): Promise<Header> { 
        if (!this.header) {
            this.header = new Header(this.page);
        }

        return this.header;
    }

    async onSideMenu(): Promise<SideMenu> { 
        if (!this.sideMenu) {
            this.sideMenu = new SideMenu(this.page);
        }

        return this.sideMenu;
    }
}
