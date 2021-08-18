import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  authSelectors from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css'



function Navigation(){
  const isLoggedIn=useSelector(authSelectors.getIsLoggedIn)
  return(
         <nav className={s.container}>
        {isLoggedIn && (
        <NavLink to="/contacts" exact>
        <h2 className={s.h2}>Телефонная книга </h2>  
        </NavLink>)}
        </nav>
  )
 
}


export default Navigation;
