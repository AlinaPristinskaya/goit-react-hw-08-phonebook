import {fetchContacts} from '../../redux/contacts/contacts-operations';

import actions from '../../redux/contacts/actions'
import {connect, useDispatch} from 'react-redux'
import { useEffect } from 'react';



const Test=({persons,onDeleteContacts})=>{
  
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchContacts())
  })
    

    return ({/* <div>{persons.length? 
        <ul >{persons.map((person)=>
          <li  key={person.id}>{person.name}:{person.number}
          <button 
              type="button"
              onClick={() => onDeleteContacts(person.id)}>Удалить
          </button>
          </li>)}
        FFFFFFFFFFF</ul> : <p>No entries in the phone book</p>}
      </div> */})
} 
       
  
const mapStateToProps = state => ({
    isLoading: state.contacts.items.isLoading,
    persons:state.contacts.items.entities
  });
  const mapDispatchToProps=dispatch=>{
    return{
      
      onDeleteContacts:(id)=>dispatch(actions.deleteContacts(id))
    }
    
  }  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Test)