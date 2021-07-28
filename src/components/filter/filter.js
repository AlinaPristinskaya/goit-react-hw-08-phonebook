import React from 'react';
import s from './Filter.module.css'



const Filter =({value,onChange})=>(
  <label className={s.label}><b>Фильтр по имени</b><input className={
    s.input
  } type="Text" value={value} onChange={onChange}/></label>

);
        

export default Filter;