import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './pages/home/Home';
import AuthContainer from './pages/auth/AuthContainer';
import ArticleContainer from './pages/article/ArticleContainer';
import MyArticleContainer from './pages/my-article/MyArticleContainer';
import SettingsContainer from './pages/settings/SettingsContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={AuthContainer} />
      <Route path='/articles/:id' component={ArticleContainer} />
      <Route path='/my-own/:myOwnId/:action?' component={MyArticleContainer} />
      <Route path='/my-article/:myArticleId?' component={MyArticleContainer} />
      <Route path='/my-articles/article/:articleId' component={MyArticleContainer} />
      {/* <Route path='/profile' component={ProfileContainer} /> */}
      <Route path='/settings' component={SettingsContainer} />
      {/* <Route path='/help' component={HelpContainer} /> */}
    </Switch>
  );
}
export default Routes;