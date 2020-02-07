import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => ( 
    <li className = "gastos">
        <p>
            {gasto.nombregasto}
            <span className = "gasto"> $ {gasto.cantidad}</span>
        </p>
    </li>
 )

 Gasto.propTypes = { 
    gastos : PropTypes.object.isRequired
 }
 
export default Gasto;