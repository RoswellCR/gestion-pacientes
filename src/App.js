import React, { useState, useEffect } from 'react';
import Formulario from './components/formulario';
import Cita from './components/cita'

function App(){
  
  //citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, setCitas] = useState([citasIniciales]);

  useEffect( ()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  
  },[citas, citasIniciales]); 

  function crearCita(cita){
    setCitas([
      ...citas,
      cita
    ])
  }
  
  function eliminarCita(id){
    const newCitas = citas.filter(cita=>cita.id !== id);
    setCitas(newCitas);
  }

  console.log(citas)
  return(
    <>
    <h1>Administrador de Citas</h1>

    <div className='container'>
      <div className='row'>
        <div className='one-half column'><Formulario crearCita={crearCita}/></div>
        <div className='one-half column'>
          <h2>{citas.length>0 ? "Administra tus citas": "No hay citas"}</h2>
          {citas.map(cita=>(<Cita 
            key = {cita.id} 
            cita = {cita}
            eliminarCita = {eliminarCita} /> ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
