import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Teamplate = lazy(() => import("../features/Teamplate"));

export default function Routes() {
  return (
    <Suspense fallback={"Loading ..."}>
      <Switch>
        <Route path="/teamplate" component={Teamplate} />
        <Redirect from="/" to="/teamplate" />
      </Switch>
    </Suspense>
  );
}
