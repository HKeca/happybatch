import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favourites" component={Favourites} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
