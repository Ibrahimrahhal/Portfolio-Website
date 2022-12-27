import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "@screens/home";
import Resume from "@screens/resume";

export default (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
