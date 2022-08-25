import React from 'react'
import { Paciente } from './Paciente'


export const ListadoPacientes = ({pacientes}) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>

        {/* md: lg: Es para señalizar el size responsive de los componentes
        h-screen es para darle x altura
         */}

            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                Adiministra tus {''}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>

            {pacientes.map( paciente => 
            <Paciente
                key={paciente.id}
                paciente={paciente}
            />)}

            
            

        </div>
    )
}