import { createSelector } from "@reduxjs/toolkit";


const getItems=state=>state.contacts.items;
const getFilter=state=>state.contacts.filter;
const getContacts=state=>state.contacts.items.entities

/* const getVisibleContacts=state=>{
    const filter=getFilter(state);
    const allContacts=getContacts(state);
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(entitie=>entitie.name.toLowerCase().includes(normalizedFilter))
  } */

   const getVisibleContacts=createSelector([getFilter,getContacts],(filter,allContacts)=>{
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(entitie=>entitie.name.toLowerCase().includes(normalizedFilter)) 
}) 

const contactsSelector={getItems,getFilter,getVisibleContacts};
export default contactsSelector