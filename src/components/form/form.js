import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';
import {connect} from 'react-redux';
import actions from '../../redux/contacts/actions';



function Form({onSubmit}){
  const [name,setName]=useState('');
  const [number,setNumber]=useState('');

  const nameInputId=uuidv4();
  const numberInputId=uuidv4();

  const handelChangeName=(event)=>{
    const {value}=event.currentTarget; 
    setName(value);
  
  }

  const handelChangeNumber=(e)=>{
    
    const {value}=e.currentTarget; 
    setNumber(value);

  }

    const handelSubmit=e=>{
    e.preventDefault();
    onSubmit({name,number});
    reset()
  }

  const reset=()=>{
      setName('');
      setNumber('');
  }
 
  
  return (
    <>
      <form className={s.form} onSubmit={handelSubmit}>
        <label htmlFor={nameInputId}> Name </label>
        <input className={s.input}
              id={nameInputId}
              onChange={handelChangeName}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
        />
       <label htmlFor={numberInputId}> Number </label>
       <input className={s.input}
              id={numberInputId}
              onChange={handelChangeNumber}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
       />
       <button className={s.button}type="submit">Add contact</button>
    </form>

</>
);}

const mapDispatchToProps=dispatch=>({
  onSubmit:data=>dispatch(actions.addContacts(data))
})

  export default connect(null,mapDispatchToProps)(Form);