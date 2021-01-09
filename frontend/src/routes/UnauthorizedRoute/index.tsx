import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'

const UnathorizedRoute: React.FC<RouteProps> = (props) => {
  const { isAuthorized } = useSelector((state: IRootState) => state.user)
  
  return(
    <Route {...props}>
      {isAuthorized && <Redirect to="/main" />}
    </Route>
  )
}

export default UnathorizedRoute