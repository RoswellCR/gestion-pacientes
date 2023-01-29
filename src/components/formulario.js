import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types';

const Formulario=({crearCita})=>{
    
    const [cita, setCita] = useState({
        paciente:'',
        acompanante:'',
        fecha:'',
        hora:'',
        sintomas:'',
    })
    const [error, setError] = useState(false);


    function handleChange(e){
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    // destructuring para extraer cada valor del estado
    const {paciente , acompanante , fecha , hora , sintomas} = cita;

    function submitCita(e){
        e.preventDefault();
        
        //validar
        if (
          paciente.trim() === "" ||
          acompanante.trim() === "" ||
          fecha.trim() === "" ||
          hora.trim() === "" ||
          sintomas.trim() === ""
        ) {
          setError(true);
          return;
        }
        
        //eliminar mensaje previo
        setError(false)
        
        //asignar ID
        cita.id= uuid()
        
        //crear cita
        crearCita(cita);

        //reiniciar form
        setCita({
            paciente:'',
            acompanante:'',
            fecha:'',
            hora:'',
            sintomas:'',
        })
    }

    

    return (
        <>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error'> Todos los campos son obligatorios</p> : null}
            <form
            onSubmit={submitCita}
            >
                
                <input type="text"
                name='paciente'
                className='u-full-width'
                placeholder='Nombre paciente'
                onChange={handleChange}
                value={paciente}
                />
                
                <input type="text"
                name='acompanante'
                className='u-full-width'
                placeholder='Nombre acompañante'
                onChange={handleChange}
                value={acompanante}
                />

                <label>Fecha:</label>
                <input type="date"
                name='fecha'
                className='u-full-width'
                onChange={handleChange}
                value= {fecha}
                />

                <label>Hora:</label>
                <input type="time"
                name='hora'
                className='u-full-width'
                onChange={handleChange}
                value={hora}
                />

                <label>Síntomas</label>
                <textarea 
                className='u-full-width'
                name='sintomas'
                onChange={handleChange}
                value={sintomas}
                ></textarea>

                <button
                type='submit'
                className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    //se define la unica props que recibe Formulario, que sera requerido 
    crearCitas: PropTypes.func.isRequired
};

export default Formulario;