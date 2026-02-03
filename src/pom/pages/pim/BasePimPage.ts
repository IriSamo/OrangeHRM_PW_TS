import { PimTopMenu } from "../../components/PimTopMenu";
import { BasePageWithHeaderAndSideMenu } from "../BasePageWithHeaderAndSideMenu";

export abstract class BasePimPage  extends BasePageWithHeaderAndSideMenu {

  readonly pimTopMenu = new PimTopMenu(this.page);
}