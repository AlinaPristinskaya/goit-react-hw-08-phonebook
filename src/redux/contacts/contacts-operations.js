


//import {createAsyncThunk} from '@reduxjs/toolkit'
import a from '../contacts/actions'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const fetchContacts = () => async dispatch => {
  dispatch(a.fetchContactsRequest());

  try {
    const { data } = await axios.get('http://localhost:3001/contacts');

    dispatch(a.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(a.fetchContactsError(error));
  } }

  const addContact = ({name,number}) => dispatch => {
    const contact = {
      id: uuidv4(),
      name:name,
      number:number,
    };
  
    dispatch(a.addContactRequest());
  
    axios
      .post('http://localhost:3001/contacts', contact)
      .then(({ data }) => dispatch(a.addContactSuccess(data)))
      .catch(error => dispatch(a.addContactError(error)));
  };
  
  const deleteContact = contactId => dispatch => {
    dispatch(a.deleteContactRequest());
  
    axios
      .delete(`http://localhost:3001/contacts/${contactId}`)
      .then(() => dispatch(a.deleteContactSuccess(contactId)))
      .catch(error => dispatch(a.deleteContactError(error)));
  };

const operations={fetchContacts,addContact,deleteContact}

export default operations;