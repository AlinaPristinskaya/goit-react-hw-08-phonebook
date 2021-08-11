

import { createAction} from '@reduxjs/toolkit'

export const addContactRequest = createAction('todos/addContactRequest');
export  const addContactSuccess=createAction('contacts/addContactSuccess')
export const addContactError = createAction('todos/addContactError');

export const deleteContactRequest = createAction('todos/deleteContactRequest');
export const deleteContactSuccess = createAction('todos/deleteContactSuccess');
export const deleteContactError = createAction('todos/deleteContactError');

 const filterContacts=createAction('contacts/filter')
/* const filterContacts=value=>({
    type:types.FILTER,
    payload: value

}); */
 const changeFilterContacts=createAction('contacts/changeFilter')
/* const changeFilterContacts=value=>({
    type:types.CHANGE_FILTER,
    payload: value

}); */
 const fetchContactsRequest=createAction('contacts/fetchContactsRequest')
 const fetchContactsSuccess=createAction('contacts/fetchContactsRequest')
 const fetchContactsError=createAction('contacts/fetchContactsRequest')

 const actions={fetchContactsError,
    fetchContactsSuccess,
    fetchContactsRequest,
    changeFilterContacts,
    filterContacts,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError

}
export default actions;