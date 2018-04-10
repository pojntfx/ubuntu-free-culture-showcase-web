import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Start } from "./routes/Start";

export const Routes = () => (
  <Router>
    <Route exact path="/" component={Start} />
  </Router>
);
