import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
      <main className="card">
        <h1>XPTO Competition</h1>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/about" />
          </Route>
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
      </main>
    </React.Fragment>
  );
}

export default App;
