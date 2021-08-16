
import contactsSelector from './redux/contacts/contacts-selectors'
import {connect, useDispatch, useSelector} from 'react-redux'
import actions from './redux/contacts/actions';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import LoginView from './components/AppBar/LoginView';
import RegisterView from './components/AppBar/RegisterView';
import ContactsView from './components/AppBar/ContactsView';
import { useEffect } from 'react';
import operations from './redux/auth/auth-operations'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import authSelectors from './redux/auth/auth-selectors'



function App({formSubmitHandler,getVisibleContacts,deleteContacts}){
  const dispatch= useDispatch();
  const isRefreshing=useSelector(authSelectors.getIsRefreshing);
  useEffect(()=>{dispatch(operations.getCurrentUser())},
  [dispatch]);
  return(
    !isRefreshing &&
    <><AppBar/>
      <Switch>
       <PublicRoute exact path='/register' restricted><RegisterView/></PublicRoute>
       <PublicRoute exact path='/login'restricted><LoginView/></PublicRoute>           
       <PrivateRoute path='/contacts'><ContactsView/></PrivateRoute>
      </Switch> 
    </>
    
)
}
const mapStateToProps=state=>{
  return {
    items:contactsSelector.getItems(state),
    filter:contactsSelector.getFilter(state)
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    formSubmitHandler:value=> dispatch(actions.addContacts(value)),
    getVisibleContacts:value=>dispatch(actions.filterContacts(value)),
    deleteContacts:id=>dispatch(actions.deleteContacts(id)),
    
    

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
