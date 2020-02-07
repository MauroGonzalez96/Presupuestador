import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid'
import Error from './Error';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombregasto, guardarNombreGasto] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    // Cuando un usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validando datos
        if(cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === ''){
            guardarError(true)
            return
        }
        guardarError(false)

        //construir el gasto
        const gasto = {
            nombregasto,
            cantidad,
            id : shortid.generate()
        }

        //alistar gastos y reseteando el form
        
        guardarGasto(gasto)
        guardarCrearGasto(true)
        guardarCantidad(0)
        guardarNombreGasto('')

      

    }
    return ( 
        <form
            onSubmit = {agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje = {"Ambos campos son obligatorios o la cantidad de tipo erronea."}/> : null}
            <div className = "campo">
                <label>Nombre Gasto</label>
                <input
                    type = 'text'
                    className = 'u-full-width'
                    placeholder = 'Ej. Transporte'
                    value = {nombregasto}
                    onChange = { e => guardarNombreGasto(e.target.value)}
                />
            </div>
            <div className = "campo">
                <label>Cantidad Gasto</label>
                <input
                    type = 'number'
                    className = 'u-full-width'
                    placeholder = 'Ej. 300'
                    value = {cantidad}
                    onChange = { e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type = "submit"
                className = "button-primary u-full-width"
                value = "Agregar gasto"
            />

        </form>
     );
}
 
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;