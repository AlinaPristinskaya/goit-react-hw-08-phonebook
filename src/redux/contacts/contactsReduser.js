import {combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import a from './actions';
//import {fetchContacts} from './contacts-operations'

const entities=createReducer([], 
  {
    [a.fetchContactsSuccess]:(_,{payload})=>payload,
    [a.addContactSuccess]:(state,{payload})=>{
      const user = state.find(user => user.name === payload.name); 
    if (user){return alert(`${payload.name} is already on contacts`)}return [...state,payload]},
    [a.deleteContactSuccess]:(state,{payload})=>state.filter(({ id }) => id !== payload)

  })
const isLoading=createReducer(false,{
  [a.fetchContactsRequest]: () => true,
  [a.fetchContactsSuccess]: () => false,
  [a.fetchContactsError]: () => false,
  [a.addContactRequest]: () => true,
  [a.addContactSuccess]: () => false,
  [a.addContactError]: () => false,
  [a.deleteContactRequest]: () => true,
  [a.deleteContactSuccess]: () => false,
  [a.deleteContactError]: () => false,


})

const error = createReducer(null, {
  [a.fetchContactsRequest]: () => null,
  [a.fetchContactsError]: () => null,
});

const filterReducer=createReducer('', {
  [a.changeFilterContacts]:(_,{payload})=>payload,
})
/* const filterReducer= (state = '', { type, payload }) => {
    switch (type) {
      case types.CHANGE_FILTER:
        return payload;
  
      default:
        return state;
    }
  }; */

export default combineReducers({
    items:combineReducers({
      entities,
      isLoading,
      error
    }),
    filter:filterReducer,
});