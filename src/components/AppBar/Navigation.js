import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  authSelectors from '../../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

function Navigation(){
  const isLoggedIn=useSelector(authSelectors.getIsLoggedIn)
  return(<nav>
    {isLoggedIn && (
      <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activeLink}>
        Телефонная книга   
      </NavLink>
      )}</nav>
  )
 
}


export default Navigation;
