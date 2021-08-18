
import s from './PersoneEditor.module.css';
import {connect, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import operations from '../../redux/contacts/contacts-operations';
import contactsSelector from '../../redux/contacts/contacts-selectors';



function PersonEditor({persons,onDeleteContacts}){
  const dispatch=useDispatch();
  
  
  useEffect(()=>{
    dispatch(operations.fetchContacts())
  },[dispatch]) 

   
    return  (  <>
      
      <div className={s.contacts}>{persons.length? 
              <ul className={s.contacts}>{persons.map((person)=>
                <li className={s.contactsLi} key={person.id}><span className={s.span}>{person.name}:{person.number}</span>
                <button className={s.gradientButton}
                    type="button"
                    onClick={() => onDeleteContacts(person.id)}>Удалить
                </button>
                </li>)}
              </ul> : <p>В вашей телефонной книге пока нет записей</p>}
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
