import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css'




function AuthNav(){
  return(
          <div>
          <NavLink to="/register" exact className={s.navlinks}> Регистрация</NavLink>
          <NavLink to="/login"  className={s.navlinks}> Логин </NavLink>
          </div>
  )
}
 


export default AuthNav;