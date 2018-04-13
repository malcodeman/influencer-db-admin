import Home from "../../Features/Home/Home";
import Campaigns from "../../Features/Campaigns/components/Campaigns";
import Orders from "../../Features/Orders/components/Orders";
import Reports from "../../Features/Reports/Reports";
import Brands from "../../Features/Brands/Brands";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/campaigns",
    component: Campaigns
  },
  {
    path: "/orders",
    component: Orders
  },
  {
    path: "/reports",
    component: Reports
  },
  {
    path: "/brands",
    component: Brands
  }
];
