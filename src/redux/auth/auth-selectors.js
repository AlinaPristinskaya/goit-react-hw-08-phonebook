const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;
const getIsLoggedIn=state=>state.auth.isLoggedIn;


const selectors={
  getIsLoggedIn,
  getIsAuthenticated,
    getUsername,
  }

export default selectors ;