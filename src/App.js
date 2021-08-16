
import contactsSelector from './redux/contacts/contacts-selectors'
import {connect, useDispatch} from 'react-redux'
import actions from './redux/contacts/actions';
import { Switch, Route} from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import LoginView from './components/AppBar/LoginView';
import RegisterView from './components/AppBar/RegisterView';
import ContactsView from './components/AppBar/ContactsView';
import { useEffect } from 'react';
import operations from './redux/auth/auth-operations'



function App({formSubmitHandler,getVisibleContacts,deleteContacts}){
  const dispatch= useDispatch();
  useEffect(()=>{dispatch(operations.getCurrentUser())},
  [dispatch]);
  return(
    <><AppBar/>
    <Switch>
      <Route exact path='/register'>
      <RegisterView/>
      </Route>  
      <Route exact path='/login'component={LoginView}/>
      <Route exact path='/contacts'component={ContactsView}/>
      
      
     
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
