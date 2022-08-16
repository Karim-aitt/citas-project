import { useState } from 'react'
import './index.css'
import {Header} from './components/Header.jsx'
import {Formulario} from './components/Formulario.jsx'
import {ListadoPacientes} from './components/ListadoPacientes.jsx'

function App() {

  return (
    <div className="container mx-auto">
    <Header />
    <Formulario />
    <ListadoPacientes/>
        
    </div>
  )
}

export default App
