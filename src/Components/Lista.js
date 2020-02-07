import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Lista = ({gastos}) => (
   <div className = "gastos-realizados">
      <h2>Listado</h2>
      {gastos.map( gasto => (
         <Gasto
            key = {gasto.id}
            gasto = {gasto}
         />
      ))}
   </div>
)
 
Lista.propTypes = { 
   gastos : PropTypes.array.isRequired
}

export default Lista;