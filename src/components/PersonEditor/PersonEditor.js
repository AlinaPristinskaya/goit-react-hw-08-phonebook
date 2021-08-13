
import s from './PersoneEditor.module.css';
import {connect, useDispatch} from 'react-redux';
//import actions from '../../redux/contacts/actions';
import { useEffect } from 'react';
import operations from '../../redux/contacts/contacts-operations';
import contactsSelector from '../../redux/contacts/contacts-selectors';



function PersonEditor({persons,onDeleteContacts}){
  const dispatch=useDispatch();
  
  
  useEffect(()=>{
    dispatch(operations.fetchContacts())
  },[dispatch]) 

   
    return  (  <>
      
      <div>{persons.length? 
              <ul className={s.stats}>{persons.map((person)=>
                <li className={s.item} key={person.id}>{person.name}:{person.number}
                <button className={s.button}
                    type="button"
                    onClick={() => onDeleteContacts(person.id)}>Удалить
                </button>
                </li>)}
              </ul> : <p>No entries in the phone book</p>}
            </div>  
   </> )
}



 const mapStateToProps=state=>({
 persons:contactsSelector.getVisibleContacts(state),
})


const mapDispatchToProps=dispatch=>{
  return{
    onDeleteContacts:(id)=>dispatch(operations.deleteContact(id))
  }
}
      

export default connect(mapStateToProps,mapDispatchToProps)(PersonEditor);
