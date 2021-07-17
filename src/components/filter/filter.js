import React from 'react';

//import PropTypes from 'prop-types'

const Filter =({value,onChange})=>(
  <label>Фильтр по имени<input type="Text" value={value} onChange={onChange}/></label>

);
        

export default Filter;