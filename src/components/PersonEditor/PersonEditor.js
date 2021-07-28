
import s from './PersoneEditor.module.css';


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

      

export default PersonEditor;