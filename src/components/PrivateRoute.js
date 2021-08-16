import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
function PrivateRoute({children,...routeProps}){
  const isLoggedIn=useSelector(authSelectors.getIsLoggedIn)
  return <Route {...routeProps}>{
    isLoggedIn?children:<Redirect to ="/login"/>}</Route>
} 

export default PrivateRoute;