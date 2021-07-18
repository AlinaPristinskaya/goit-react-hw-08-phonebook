import React,{Component} from 'react';

//import PropTypes from 'prop-types'
import s from './PersoneEditor.module.css'
class PersonEditor extends Component{
    static defaultProps = {
        persons: [],
    };


    
    state={
        persons:this.props.persons
    }
          
     
    render=()=>{
        const {persons}=this.props;
        
        
        return(
            <div>
                {persons.length? <ul className={s.stats}>{persons.map((person)=><li className={s.item} key={person.id}>{person.name}:{person.number}
                <button
                className={s.button}
          type="button"
          onClick={() => this.props.onDeleteContacts(person.id)}
        >
          Удалить
        </button>
        </li>)}</ul> : <p>No entries in the phone book</p>}
            </div>
          )
      }
  }


    
       

export default PersonEditor;