
import React,{useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from "./components/Form/Form"
import PersonEditor from './components/PersonEditor/PersonEditor';
import Filter from './components/Filter/Filter';



function App(){
  const [contacts,setContacts]=useState(()=>{
    return JSON.parse(localStorage.getItem('contacts'))??[]
  })
  const [filter,setFilter]=useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  const nameListId=uuidv4();

  const formSubmitHandler=data=>{
    const person={
      id:nameListId,
      name:data.name,
      number:data.number
            
    }
    const user = contacts.find(user => user.name === person.name);
    user?alert(`${user.name} is already on contacts`):
    setContacts(prev=>([person,...prev]))
      
  }
    
   const changeFilter=(e)=>{
    setFilter(e.currentTarget.value)

  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContacts = contactId => {
    setContacts(prev => (prev.filter(contact => contact.id !== contactId)));
  };

  const visibleContacts=getVisibleContacts();


  return(
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler}/>
      <Filter value={filter} onChange={changeFilter}  />
      <h2>Contacts</h2>
      <PersonEditor persons={visibleContacts} onDeleteContacts={deleteContacts}/>
    </>
    
)
}

export default App;
