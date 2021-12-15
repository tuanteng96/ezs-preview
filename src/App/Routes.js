import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import OnBoarding from "../components/OnBoarding/OnBoarding";

const Teamplate = lazy(() => import("../features/Teamplate"));

export default function Routes() {
  return (
    <Suspense fallback={<OnBoarding />}>
      <Switch>
        <Route path="/teamplate" component={Teamplate} />
        <Redirect from="/" to="/teamplate" />
      </Switch>
    </Suspense>
  );
}
