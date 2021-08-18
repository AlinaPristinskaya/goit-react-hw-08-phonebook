import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';



function UserMenu(){
  const dispatch=useDispatch();
  const name=useSelector(authSelectors.getUsername);
 return (
    <div className={s.container}>
    <span >Добро пожаловать, {name}</span>
    <button className={s.gradientButton} type="button" onClick={()=>dispatch(authOperations.logOut())}>
      Выйти
    </button>
    </div>)
}

export default UserMenu;
