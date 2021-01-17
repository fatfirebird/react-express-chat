import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Auth from '../pages/Auth'
import Main from '../pages/Main'

import AuthorizedRoute from './AuthorizedRoute'
import UnathorizedRoute from './UnauthorizedRoute'

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
    <Switch>
      <UnathorizedRoute exact path="/auth" component={Auth}/>
      <AuthorizedRoute exact path="/main" component={Main}/>
      <Route exact path="*">
        <Redirect to="/main" />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default Routes