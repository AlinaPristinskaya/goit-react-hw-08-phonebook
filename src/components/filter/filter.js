import React from 'react';
import s from './Filter.module.css'
import {connect} from 'react-redux'
import actions from '../../redux/contacts/actions'
import contactsSelector from '../../redux/contacts/contacts-selectors';



const Filter =({value,onChange})=>(
  <div className={s.container}>
  <div className={s.form}><div className={s.row}>
  <div class={s.col25}>
  <label className={s.label}><b>Поиск контакта по имени</b><div className={s.col75}><input className={
    s.input
  } type="Text" value={value} onChange={onChange}/></div></label></div></div></div></div>

);
const mapStateToProps=state=>({
  value:contactsSelector.getFilter(state)
}) 
const mapDispatchToProps=dispatch=>({
  onChange:e=>dispatch(actions.changeFilterContacts(e.target.value))
})       

export default connect(mapStateToProps,mapDispatchToProps)(Filter);