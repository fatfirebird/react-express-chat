import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { IRootState } from '../../redux/store'
import UserService from '../../services/User'

const AuthorizedRoute: React.FC<RouteProps> = (props) => {
  const { isAuthorized, id } = useSelector((state: IRootState) => state.user)

  useEffect(() => {
    console.log(123)
    if (isAuthorized && id) {
      UserService.getUser(id)
    }
  }, [isAuthorized, id])

  return <Route {...props}>{!isAuthorized && <Redirect to="/auth" />}</Route>
}

export default AuthorizedRoute
