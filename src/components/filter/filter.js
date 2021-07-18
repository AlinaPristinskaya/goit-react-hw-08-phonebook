import React from 'react';

//import PropTypes from 'prop-types'
import s from './filter.module.css'

const Filter =({value,onChange})=>(
  <label className={s.label}><b>Фильтр по имени</b><input className={
    s.input
  } type="Text" value={value} onChange={onChange}/></label>

);
        

export default Filter;