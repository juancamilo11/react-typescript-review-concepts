import EagerPage01 from "../modules/eager-module/pages/EagerPage01";
import EagerPage02 from "../modules/eager-module/pages/EagerPage02";
import EagerPage03 from "../modules/eager-module/pages/EagerPage03";
import LazyPage01 from "../modules/lazy-module/pages/LazyPage01";
import LazyPage02 from "../modules/lazy-module/pages/LazyPage02";
import LazyPage03 from "../modules/lazy-module/pages/LazyPage03";

interface Route {
  id: number;
  to: string;
  path: string;
  component: () => JSX.Element;
  name: string;
  type: string;
}

export const routes: Route[] = [
  {
    id: 1,
    to: "/lazy01",
    path: "lazy01",
    component: LazyPage01,
    name: "Lazy 01",
    type: "lazy",
  },
  {
    id: 2,
    to: "/lazy02",
    path: "lazy02",
    component: LazyPage02,
    name: "Lazy 02",
    type: "lazy",
  },
  {
    id: 3,
    to: "/lazy03",
    path: "lazy03",
    component: LazyPage03,
    name: "Lazy 03",
    type: "lazy",
  },
  {
    id: 4,
    to: "/eager01",
    path: "eager01",
    component: EagerPage01,
    name: "Eager 01",
    type: "eager",
  },
  {
    id: 5,
    to: "/lazy02",
    path: "lazy02",
    component: EagerPage02,
    name: "Eager 02",
    type: "eager",
  },
  {
    id: 6,
    to: "/eager03",
    path: "eager03",
    component: EagerPage03,
    name: "Eager 03",
    type: "eager",
  },
];
