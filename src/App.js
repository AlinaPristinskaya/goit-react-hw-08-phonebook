
import React,{Component} from 'react';
//import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from "./components/form/form"
import PersonEditor from './components/PersonEditor/PersonEditor';
import Filter from './components/filter/filter'



class App extends Component {

  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  }
  nameListId=uuidv4();
  formSubmitHandler=data=>{
   
    const person={
      id:this.nameListId,
      name:data.name,
      number:data.number
      
      
    }
    this.setState(prevState=>({      
       
        contacts:[...prevState.contacts,person],
        
    }))
    
    console.log(this.state.contacts)
  }
  changeFiltr=(e)=>{
    this.setState({filter:e.currentTarget.value})
  }
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  

   
  render() {
     const visibleContacts=this.getVisibleContacts();
     console.log(visibleContacts)
     console.log(this.state.contacts)
       return (
            <>
            <h1>Phonebook</h1>
            <Form onSubmit={this.formSubmitHandler}/>
            <Filter value={this.state.filter} onChange={this.changeFiltr}  />
            <h2>Contacts</h2>


            <PersonEditor persons={visibleContacts} />
          </>
          
     )
   

  }
  }



export default App;
