import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import About from "./pages/About";
import Competitors from "./pages/Competitors";
import Winners from "./pages/Winners";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/competitors">
          <Competitors />
        </Route>
        <Route path="/winners">
          <Winners />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
