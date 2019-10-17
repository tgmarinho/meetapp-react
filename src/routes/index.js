import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Details from "../pages/Details";
import Meetup from "../pages/Meetup";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/details/:id" component={Details} />
      <Route path="/meetup/:id" component={Meetup} />
      <Route path="/meetup/new" component={Meetup} />
    </Switch>
  );
}
