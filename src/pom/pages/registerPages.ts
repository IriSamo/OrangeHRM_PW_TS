/**
 * Centralized page registration. Import this once (e.g. in baseFixtures) so that
 * BasePageWithHeaderAndSideMenu is fully loaded before PIMPage/AdminPage extend it.
 */
import { DashboardPage } from './DashboardPage';
import { PIMPage } from './PIMPage';
import { AdminPage } from './AdminPage';
import { Route } from '../navigation/Route';
import { registerPage } from '../navigation/pageRegistry';

registerPage(Route.Dashboard, DashboardPage);
registerPage(Route.PIM, PIMPage);
registerPage(Route.Admin, AdminPage);
