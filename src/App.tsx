import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { HOME_PAGE_ROUTE, INDEX_ROUTE } from "./config/routes";
import Container from "./components/Container";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path={INDEX_ROUTE} element={<Container />}>
        <Route path={HOME_PAGE_ROUTE} element={<Home />} />
      </Route>
      <Route path={"*"} element={<Navigate replace to={HOME_PAGE_ROUTE} />} />
    </Routes>
  );
}

export default App;
