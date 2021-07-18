import React,{Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './form.module.css'

class Form extends Component {
    
  state = {
    contacts: [],
    name: '',
    number:''
  }
  nameInputId=uuidv4();
  numberInputId=uuidv4();



  handelChange=(event)=>{
    const {name,value}=event.currentTarget;
    console.log(this.state.name)
    console.log(this.state.contacts)    
    this.setState({[name]:value})

  }
  handelSubmit=e=>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
  }
  reset=()=>{
      this.setState({
        contacts: [],
        name: '',
        number:''
      })
  }

   
  render() {
      
       return (
            <>
            
            <form className={s.form} onSubmit={this.handelSubmit}>
              <label htmlFor={this.nameInputId}> Name </label>
            <input
            className={
              s.input
            }
            id={this.nameInputId}
            onChange={this.handelChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
/>
            <label htmlFor={this.numberInputId}> Number </label>
              <input
              className={
                s.input
              }
              id={this.numberInputId}
              onChange={this.handelChange}
              value={this.state.number}
              type="tel"
              name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
               required
/>
            
       
            <button className={s.button}type="submit">Add contact</button>
   
            </form>
     
      
        
        

              
      </>
    );

  }}
  export default Form;