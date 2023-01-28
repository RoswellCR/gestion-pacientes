import React from 'react';
import Formulario from './components/formulario';

function App(){
  return(
    <>
    <h1>Administrador de Citas</h1>

    <div className='container'>
      <div className='row'>
        <div className='one-half column'><Formulario/></div>
        <div className='one-half column'>2</div>
      </div>
    </div>
    </>
  )
}

export default App;
