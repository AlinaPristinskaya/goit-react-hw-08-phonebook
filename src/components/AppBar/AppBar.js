import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import selectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import s from './AppBar.module.css';



const AppBar = () => {
  const isLoggedIn=useSelector(selectors.getIsLoggedIn)
return(
    <header className={s.header}>
    <Navigation />
    {isLoggedIn?<UserMenu />: <AuthNav />}    
    </header>
    )
};


export default AppBar;
