
import s from './PersoneEditor.module.css';
import {connect, useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/contacts/actions';
import { useEffect } from 'react';
import {fetchContacts} from '../../redux/contacts/contacts-operations'



function PersonEditor({onDeleteContacts}){
  const dispatch=useDispatch();
  const persons=useSelector(state=>state.contacts.items.entities)
  
  useEffect(()=>{
    dispatch(fetchContacts())
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
const getVisibleContacts=(entities,filter)=>{
  const normalizedFilter = filter.toLowerCase();
  return entities.filter(entitie=>entitie.name.toLowerCase().includes(normalizedFilter))
}


 const mapStateToProps=({contacts:{items:{entities},filter}})=>({

 persons:getVisibleContacts(entities,filter),
})


const mapDispatchToProps=dispatch=>{
  return{
    onDeleteContacts:(id)=>dispatch(actions.deleteContacts(id))
    
  }
  
}
      

export default connect(mapStateToProps,mapDispatchToProps)(PersonEditor);
