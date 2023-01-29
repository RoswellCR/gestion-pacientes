import React, { useState } from 'react';
import Formulario from './components/formulario';
import Cita from './components/cita'

function App(){
  
  const [citas, setCitas] = useState([]);

  function crearCita(cita){
    setCitas([
      ...citas,
      cita
    ])
    
  }
  console.log(citas)
  return(
    <>
    <h1>Administrador de Citas</h1>

    <div className='container'>
      <div className='row'>
        <div className='one-half column'><Formulario crearCita={crearCita}/></div>
        <div className='one-half column'>
          <h2>Administra tu cita</h2>
          {citas.map(cita=>(<Cita 
            key = {cita.id} 
            cita = {cita} /> ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
