const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;
const getIsLoggedIn=state=>state.auth.isLoggedIn;
const getIsRefreshing=state=>state.auth.isRefreshing


const selectors={
    getIsLoggedIn,
    getIsAuthenticated,
    getUsername,
    getIsRefreshing
}

export default selectors ;