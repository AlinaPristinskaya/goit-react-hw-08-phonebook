import React from 'react';
import s from './Filter.module.css'
import {connect} from 'react-redux'
import actions from '../../redux/contacts/actions'



const Filter =({value,onChange})=>(
  <label className={s.label}><b>Фильтр по имени</b><input className={
    s.input
  } type="Text" value={value} onChange={onChange}/></label>

);
const mapStateToProps=state=>({
  value:state.contacts.filter
}) 
const mapDispatchToProps=dispatch=>({
  onChange:e=>dispatch(actions.changeFilterContacts(e.target.value))
})       

export default connect(mapStateToProps,mapDispatchToProps)(Filter);