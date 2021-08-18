import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import {connect} from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import contactSelector from '../../redux/contacts/contacts-selectors'
import style from './Form.module.css';




function Form({onSubmit,entities}){
  const [name,setName]=useState('');
  const [number,setNumber]=useState('');

  const nameInputId=uuidv4();
  const numberInputId=uuidv4();

  const handelChangeName=(event)=>{
    const {value}=event.currentTarget;  
    setName(value);
  
  }

  const handelChangeNumber=(e)=>{
    console.log(e);
    const {value}=e.currentTarget;  
    setNumber(value);

  }

    const handelSubmit=e=>{
    e.preventDefault();
    const user = entities.find(user => user.name === name);
    if (!user){
      onSubmit({name,number});
    reset()

    } else 
    alert (`${name} is already on contacts`)
    reset()
  }

  const reset=()=>{
      setName('');
      setNumber('');
  }

  
  return (
    <>
    <div className={style.container}>
    <h3>Добавить контакт к телефонную книгу</h3>
      <form className={style.form} onSubmit={handelSubmit}>
      <div class={style.row}>
          <div class={style.col25}>
        <label htmlFor={nameInputId}> Имя </label></div></div>
        <div class="col-75">
        <input className={style.input}
              id={nameInputId}
              onChange={handelChangeName}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
        /></div>

       <label htmlFor={numberInputId}> Номер </label>
       <input className={style.input}
              id={numberInputId}
              onChange={handelChangeNumber}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
       />
       <button className={style.gradientButton}type="submit">Добавить</button>
    </form></div>

</>
);}

const mapStateToProps=state=>({
  entities:contactSelector.getVisibleContacts(state)
})
const mapDispatchToProps=dispatch=>({
  
  onSubmit:data=>dispatch(operations.addContact(data))
})

  export default connect(mapStateToProps,mapDispatchToProps)(Form);