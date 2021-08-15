import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import PersonEditor from '../PersonEditor/PersonEditor';
//import authSelectors from '../../redux/auth/auth-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations'

function ContactsView(){
     const dispatch=useDispatch();
     
     useEffect(()=>dispatch(contactsOperations.fetchContacts()),[dispatch]);
 return (<>
      <h1>Phonebook</h1>
      <Form/> 
      <Filter/>
      <h2>Contacts</h2>
      <PersonEditor /> 
      </>)



 }



export default ContactsView;