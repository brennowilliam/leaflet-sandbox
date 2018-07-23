import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Header from "../components/Header";
import BasicExample from "../components/BasicExample";
import Shapes from "../components/Shapes";
import Simple from "../components/Simple";

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={BasicExample} exact />
        <Route path="/shapes" component={Shapes} exact />
        <Route path="/simple" component={Simple} exact />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
