import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  INDEX_ROUTE,
  PROJECTS_PAGE_ROUTE,
} from "./config/routes";

import Container from "./components/Container";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path={INDEX_ROUTE} element={<Container />}>
        <Route path={HOME_PAGE_ROUTE} element={<Home />} />
        <Route path={ABOUT_PAGE_ROUTE} element={<About />} />
        <Route path={CONTACT_PAGE_ROUTE} element={<Contact />} />
        <Route path={PROJECTS_PAGE_ROUTE} element={<Projects />} />
      </Route>
      <Route path={"*"} element={<Navigate replace to={HOME_PAGE_ROUTE} />} />
    </Routes>
  );
}

export default App;
