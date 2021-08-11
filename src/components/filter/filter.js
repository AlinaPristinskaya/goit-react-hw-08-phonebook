import React from 'react';
import s from './Filter.module.css'
import {connect} from 'react-redux'
import actions from '../../redux/contacts/actions'
import contactsSelector from '../../redux/contacts/contacts-selektors';



const Filter =({value,onChange})=>(
  <label className={s.label}><b>Фильтр по имени</b><input className={
    s.input
  } type="Text" value={value} onChange={onChange}/></label>

);
const mapStateToProps=state=>({
  value:contactsSelector.getFilter(state)
}) 
const mapDispatchToProps=dispatch=>({
  onChange:e=>dispatch(actions.changeFilterContacts(e.target.value))
})       

export default connect(mapStateToProps,mapDispatchToProps)(Filter);