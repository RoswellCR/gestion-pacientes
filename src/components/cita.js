import React from 'react'

const Cita=({cita})=>(
    <div className='cita'>
        <p>Paciente: <span>{cita.paciente}</span></p>
        <p>Acompañante: <span>{cita.acompanante}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>
    </div>
);
export default Cita;