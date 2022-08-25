import React from 'react'
import '/src/styles/Header.css'

export const Header = (props) => {

    return (
        <div>
            <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>
            Seguimiento Pacientes {""}
            <span className='text-indigo-600'>Veterinaria</span>
            </h1>
        </div>
    )
}