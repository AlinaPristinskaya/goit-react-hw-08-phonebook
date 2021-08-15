import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import selectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = () => {
  const isLoggedIn=useSelector(selectors.getIsLoggedIn)
return(
  <header style={styles.header}>
    <Navigation />
  {isLoggedIn?<UserMenu />: <AuthNav />}
    
  </header>)
};

/* const mapStateToProps = state => ({
  isAuthenticated: selectors.getIsAuthenticated(state),
}); */

export default connect()(AppBar);
