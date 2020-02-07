import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, mostrarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }
    const mensaje = 'Hubo un error grande'

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar 
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return //para cortar la ejecucion del codigo si se cae en este error
        }
        guardarError(false)
        {guardarPresupuesto(cantidad)}
        {guardarRestante(cantidad)}
        {mostrarPregunta(false)}

        //Si se pasa la validación
    }

    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>
            {error ?  <Error mensaje = {mensaje}/>: null}

            <form
                onSubmit = {agregarPresupuesto}
            >
                <input
                    type = "number"
                    className = 'u-full-width'
                    placeholder = 'Coloca aqui tu presupuesto'
                    onChange = {definirPresupuesto}
                />

                <input
                    type = 'submit'
                    className = 'button-primary u-full-width'
                    value = 'Definir Presupuesto'
                />
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    mostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;