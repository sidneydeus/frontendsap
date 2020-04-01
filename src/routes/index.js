import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import UserDetails from '../pages/UserDetails';
import UserRepos from '../pages/UserRepos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/userdetails/:login" exact component={UserDetails} />
      <Route path="/repos/:login" exact component={UserRepos} />
      <Route path="/" component={() => <h1>Page not found (404)</h1>} />
    </Switch>
  );
}
