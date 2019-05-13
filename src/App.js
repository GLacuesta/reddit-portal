import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import RedditPortal from './containers/RedditPortal/RedditPortal';


import ViewPost from './containers/PostSection/PostSection';
const asyncPostSection = asyncComponent(() => {
  return import('./containers/PostSection/PostSection');
});

class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/Post" component={asyncPostSection} />
          <Route path="/" exact component={RedditPortal} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
