import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Start } from "./routes/Start";
import { Detail } from "./routes/Detail";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/detail/:id" component={Detail} />
    </Switch>
  </Router>
);
