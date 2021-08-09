import {combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions'

const itemsReducer=createReducer([  
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},], 
  {
    [actions.addContacts]:(state,{payload})=>{
      const user = state.find(user => user.name === payload.name); 
    if (user){return alert(`${payload.name} is already on contacts`)}return [...state,payload]},
    [actions.deleteContacts]:(state,{payload})=>state.filter(({ id }) => id !== payload)

  })


/* const itemInitialState= [  
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},];
const itemsReducer = (state = itemInitialState, { type, payload }) => {
    switch (type) {
      case types.ADD:
        return [...state,payload];
  
      case types.DELETE:
        return state.filter(({ id }) => id !== payload);

      
        
     
      default:
        return state;
    }
  }; */

const filterReducer=createReducer('', {
  [actions.changeFilterContacts]:(_,{payload})=>payload,
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
    items:itemsReducer,
    filter:filterReducer,
});