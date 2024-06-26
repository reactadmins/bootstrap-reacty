import Dashboard from "./views/Dashboard";
import Buttons from "./views/Buttons";
import Badges from "./views/Badges";
import Tables from "./views/Tables";
import SocialButtons from "./views/SocialButtons";
import Cards from "./views/Cards";
import Alerts from "./views/Alerts";
import ProgressBars from "./views/ProgressBars";
import Modals from "./views/Modals";
import Grids from "./views/Grids";
import Typography from "./views/Typography";
import Forms from "./views/Forms";
import Widgets from "./views/Widgets";
import Charts from "./views/Charts";
import Maps from "./views/Maps";
import Login from "./views/Login";
import Register from "./views/Register";
import Page404 from "./views/Error404";
import Page500 from "./views/Error500";

const routes = [
    {
        path: "/",
        component: Dashboard,
    },
    {
        path: "/dashboard",
        component: Dashboard,
    },
    {
        path: "/components/buttons",
        component: Buttons,
    },
    {
        path: "/components/badges",
        component: Badges,
    },
    {
        path: "/components/socials",
        component: SocialButtons,
    },
    {
        path: "/components/cards",
        component: Cards,
    },
    {
        path: "/components/alerts",
        component: Alerts,
    },
    {
        path: "/components/progressbars",
        component: ProgressBars,
    },
    {
        path: "/components/modals",
        component: Modals,
    },
    {
        path: "/components/grids",
        component: Grids,
    },
    {
        path: "/components/typography",
        component: Typography,
    },
    {
        path: "/tables",
        component: Tables,
    },
    {
        path: "/forms",
        component: Forms,
    },
    {
        path: "/widgets",
        component: Widgets,
    },
    {
        path: "/charts",
        component: Charts,
    },

    {
        path: "/maps",
        component: Maps,
    },
    {
        route: "/login",
        component: Login,
    },
    {
        route: "/register",
        component: Register,
    },
    {
        route: "/page404",
        component: Page404,
    },
    {
        route: "*",
        component: Page404,
    },
    {
        route: "/page500",
        component: Page500,
    },
];

export default routes;

