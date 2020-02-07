import React, {useState, useEffect} from 'react';
import Pregunta from './Components/Pregunta';
import Formulario from './Components/Formulario';
import Lista from './Components/Lista';
import ControlPresupuesto from './Components/ControlPresupuesto';


function App() {
  //Area para crear useStates
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [preguntapresupuesto, mostrarPregunta] = useState(true)
  const [gastos, agregarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)


  useEffect(() => {
    if(crearGasto){

      //Presupuesto
      agregarGastos([
        ...gastos,
        gasto
      ])

      //Calculo del restante
      const CalculoRestante = restante - gasto.cantidad
      guardarRestante(CalculoRestante)

      //reseteando a false
      guardarCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante])



  return (
    <div className = "container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className = 'contenido-principal contenido'>
          {preguntapresupuesto ? 
          (
            <Pregunta
              guardarPresupuesto = {guardarPresupuesto}
              guardarRestante = {guardarRestante}
              mostrarPregunta = {mostrarPregunta}
            />
          ) : (
            <div className = "row">
              <div className = "one-half column">
                <Formulario
                  guardarGasto = {guardarGasto}
                  guardarCrearGasto = {guardarCrearGasto}
                />
              </div>
              <div className = "one-half column">
                <Lista
                  gastos = {gastos}
                />
                <ControlPresupuesto
                  presupuesto = {presupuesto}
                  restante = {restante}
                />
              </div>
            </div>
          )
          
          }
          
          
        </div> 
      </header>
    </div>
  );
}

export default App;
