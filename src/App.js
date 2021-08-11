
//import React,{useState,useEffect} from 'react';
//import { v4 as uuidv4 } from 'uuid';
import Test from './components/Test/Test'

import Form from "./components/Form/Form"
import PersonEditor from './components/PersonEditor/PersonEditor';
import Filter from './components/Filter/Filter';
import {connect} from 'react-redux'
import actions from './redux/contacts/actions';
import { Switch, Route} from 'react-router-dom';





function App(){
  
  return(
    <><Switch>
      <Route path="/goit-react-hw-07-phonebook">
      <h1>Phonebook</h1>
      <Form/> 
      <Filter/>
      <h2>Contacts</h2>
      <PersonEditor /> 
      </Route>
      <Route path="/goit-react-hw-07-phonebook/contacts">
        <Test />
      </Route>
    </Switch> 
    </>
    
)
}
const mapStateToProps=state=>{
  return {
    items:state.contacts.items,
    filter:state.contacts.filter
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
