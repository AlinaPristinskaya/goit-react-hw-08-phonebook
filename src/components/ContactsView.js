import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import PersonEditor from './PersonEditor/PersonEditor';
//import authSelectors from '../../redux/auth/auth-selectors';
import contactsOperations from '../redux/contacts/contacts-operations'

function ContactsView(){
     const dispatch=useDispatch();
     
     useEffect(()=>dispatch(contactsOperations.fetchContacts()),[dispatch]);
 return (<>
      <Form/> 
      <Filter/>
      <PersonEditor /> 
      </>)



 }



export default ContactsView;