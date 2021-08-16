import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
function PublicRoute({
  children,
  restricted=false,
  ...routeProps}){
  const isLoggedIn=useSelector(authSelectors.getIsLoggedIn);
  const shoulRedirect=isLoggedIn&&restricted
  return<Route {...routeProps}>{shoulRedirect?<Redirect to="/contacts"/>:children}</Route>
}

export default PublicRoute;