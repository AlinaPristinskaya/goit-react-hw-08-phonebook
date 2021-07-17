import React,{Component} from 'react';

//import PropTypes from 'prop-types'

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
                {persons.length? <ul>{persons.map((person)=><li key={person.id}>{person.name}:{person.number}</li>)}</ul> : <p>No entries in the phone book</p>}
            </div>
          )
      }
  }


    
       

export default PersonEditor;