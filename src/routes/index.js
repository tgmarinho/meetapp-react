import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';
import Meetups from '~/pages/Meetups';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/meetups" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      {/* <Route path="/meetup/:id" component={Meetups} isPrivate /> */}
      {/* <Route path="/meetup/new" compone nt={Meetup} isPrivate /> */}
    </Switch>
  );
}
