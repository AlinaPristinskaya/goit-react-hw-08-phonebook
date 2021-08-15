import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
//import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

function UserMenu(){
  const dispatch=useDispatch();
  const name=useSelector(authSelectors.getUsername);
 return (<div style={styles.container}>
    
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={()=>dispatch(authOperations.logOut())
    }>
      Logout
    </button>
  </div>)
}

export default UserMenu;
