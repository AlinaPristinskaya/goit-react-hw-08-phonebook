import {combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions'

const itemsReducer=createReducer([], 
  {
    [actions.addContacts]:(state,{payload})=>{
      const user = state.find(user => user.name === payload.name); 
    if (user){return alert(`${payload.name} is already on contacts`)}return [...state,payload]},
    [actions.deleteContacts]:(state,{payload})=>state.filter(({ id }) => id !== payload)

  })

const filterReducer=createReducer('', {
  [actions.changeFilterContacts]:(_,{payload})=>payload,
})


export default combineReducers({
    items:itemsReducer,
    filter:filterReducer,
});