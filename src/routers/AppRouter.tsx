import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import icon from "../assets/images/icon.png";

import EagerPage01 from "../modules/eager-module/pages/EagerPage01";
import EagerPage02 from "../modules/eager-module/pages/EagerPage02";
import EagerPage03 from "../modules/eager-module/pages/EagerPage03";
import LazyPage01 from "../modules/lazy-module/pages/LazyPage01";
import LazyPage02 from "../modules/lazy-module/pages/LazyPage02";
import LazyPage03 from "../modules/lazy-module/pages/LazyPage03";
import NotFound404 from "../pages/common/NotFound404";

import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={icon} alt="react-logo" className="main-icon" />
            <hr />
            <h4 className="navbar-section-title">Lazy Loading</h4>
            <ul>
              {routes
                .filter((route) => route.type === "lazy")
                .map(({ id, component: Component, to, name }) => (
                  <li key={id}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
            </ul>

            <h4 className="navbar-section-title">Eager Loading</h4>
            <ul>
              {routes
                .filter((route) => route.type === "eager")
                .map(({ id, to, name }) => (
                  <li key={id}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
          <Routes>
            {/* Lazy Loading*/}
            {routes
              .filter((route) => route.type === "lazy")
              .map(({ id, path, component: Component }) => (
                <Route key={id} path={path} element={<Component />} />
              ))}

            {/* Eager Loading */}

            {routes
              .filter((route) => route.type === "eager")
              .map(({ id, path, component: Component }) => (
                <Route key={id} path={path} element={<Component />} />
              ))}

            {/* No matching route */}
            <Route path="/*" element={<NotFound404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
