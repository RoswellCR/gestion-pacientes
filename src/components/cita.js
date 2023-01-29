import React from 'react'
import PropTypes from 'prop-types';

const Cita=({cita, eliminarCita})=>(
    <div className='cita'>
        <p>Paciente: <span>{cita.paciente}</span></p>
        <p>Acompañante: <span>{cita.acompanante}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>
        <button className='button eliminar u-full-width'
            onClick={() => eliminarCita(cita.id)}> Eliminar &times;</button>
    </div>
);

Cita.propTypes={
    //se definen las props que recibe Cita 
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;