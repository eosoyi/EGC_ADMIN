import React, { lazy, LazyExoticComponent } from "react";
import { FaChartSimple, FaUserGroup } from "react-icons/fa6";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  icon: React.JSX.Element;
}

const memberPage = lazy(() => import("../pages/members/MemberPage"));
const dashboardPage = lazy(() => import("../pages/dashboard/DashboardPage"));

export const routes: Route[] = [
  {
    to: "/dashboard",
    path: "dashboard",
    component: dashboardPage,
    name: "Dashboard",
    icon: <FaChartSimple className="icon" />,
  },
  {
    to: "/usuarios",
    path: "usuarios",
    component: memberPage,
    name: "Usuarios",
    icon: <FaUserGroup className="icon" />,
  },
];
