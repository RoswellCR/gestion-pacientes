import React from 'react';

const Formulario=()=>{
    return (
        <>
            <h2>Crear Cita</h2>
            <form>
                
                <input type="text"
                name='mascota'
                className='u-full-width'
                placeholder='Nombre paciente'
                />
                
                <input type="text"
                name='acompanante'
                className='u-full-width'
                placeholder='Nombre acompañante'
                />

                <label>Fecha:</label>
                <input type="date"
                name='fecha'
                className='u-full-width'
                />

                <label>Hora:</label>
                <input type="time"
                name='hora'
                className='u-full-width'
                />

                <label>Síntomas</label>
                <textarea 
                    className='u-full-width'
                    name='sintomas'
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </>
    )
}

export default Formulario;