import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/Main";
import ViewPage from "./pages/View";

function Teamplate(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage}></Route>
      <Route path={`${match.url}/view`} component={ViewPage}></Route>
    </Switch>
  );
}

export default Teamplate;
