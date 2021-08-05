
import { v4 as uuidv4 } from 'uuid';
import { createAction} from '@reduxjs/toolkit'

const addContacts=createAction('contacts/add',data=>{
       return{ payload:{
           id:uuidv4(),
           name:data.name,
           number:data.number}} 
})
/* const addContacts=value=>({
    type:types.ADD,
    payload: {
        id:uuidv4(),
        name:value.name,
        number:value.number
      }
}); */
const deleteContacts=createAction('contacts/deleted');
/* const deleteContacts=id=>({
    type:types.DELETE,
    payload: id

}); */
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


const actions={ addContacts,  filterContacts, deleteContacts,changeFilterContacts }
export default actions;