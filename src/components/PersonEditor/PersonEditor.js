
import s from './PersoneEditor.module.css';
import {connect} from 'react-redux';
import actions from '../../redux/contacts/actions';


function PersonEditor({persons,onDeleteContacts}){
   
    return  <div>{persons.length? 
              <ul className={s.stats}>{persons.map((person)=>
                <li className={s.item} key={person.id}>{person.name}:{person.number}
                <button className={s.button}
                    type="button"
                    onClick={() => onDeleteContacts(person.id)}>Удалить
                </button>
                </li>)}
              </ul> : <p>No entries in the phone book</p>}
            </div>

}
const getVisibleContacts=(items,filter)=>{
  const normalizedFilter = filter.toLowerCase();
  return items.filter(item=>item.name.toLowerCase().includes(normalizedFilter))
}


 const mapStateToProps=({contacts:{items,filter}})=>({

 persons:getVisibleContacts(items,filter),
})


const mapDispatchToProps=dispatch=>{
  return{
    onDeleteContacts:(id)=>dispatch(actions.deleteContacts(id))
  }
  
}
      

export default connect(mapStateToProps,mapDispatchToProps)(PersonEditor); 
