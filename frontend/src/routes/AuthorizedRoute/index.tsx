import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { IRootState } from '../../redux/store'

const AuthorizedRoute: React.FC<RouteProps> = (props) => {
  const { isAuthorized } = useSelector((state: IRootState) => state.user)

  return <Route {...props}>{!isAuthorized && <Redirect to="/auth" />}</Route>
}

export default AuthorizedRoute
