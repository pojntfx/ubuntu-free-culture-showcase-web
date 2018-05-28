import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { Start } from "./routes/Start";
import { Detail } from "./routes/Detail";
import PropTypes from "prop-types";

export const Routes = () => (
  <Router>
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={Start} />
        <Route exact path="/detail/:id" component={Detail} />
      </ScrollToTop>
    </Switch>
  </Router>
);

// Scroll to top on page change
class Scroller extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

Scroller.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

const ScrollToTop = withRouter(Scroller);
