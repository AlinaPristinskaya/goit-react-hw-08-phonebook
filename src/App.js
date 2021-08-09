
//import React,{useState,useEffect} from 'react';
//import { v4 as uuidv4 } from 'uuid';
import Form from "./components/Form/Form"
import PersonEditor from './components/PersonEditor/PersonEditor';
import Filter from './components/Filter/Filter';
import {connect} from 'react-redux'
import actions from './redux/contacts/actions'



function App({getVisibleContacts,formSubmitHandler,deleteContacts}){
  
  return(
    <>
      <h1>Phonebook</h1>
      <Form/> 
      <Filter/>
      <h2>Contacts</h2>
      <PersonEditor />
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
    deleteContacts:id=>dispatch(actions.deleteContacts(id))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
