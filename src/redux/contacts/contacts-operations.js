


//import {createAsyncThunk} from '@reduxjs/toolkit'
import a from '../contacts/actions'
import axios from 'axios'

/*  const fetchContacts = createAsyncThunk(
  '/contacts/fetchContacts',
  async ()=>{
    const response= await fetchContacts();
    return response
  }
    
) */

export const fetchContacts = () => async dispatch => {
  dispatch(a.fetchContactsRequest());

  try {
    const { data } = await axios.get('http://localhost:3000/contacts');

    dispatch(a.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(a.fetchContactsError(error));
  } }





