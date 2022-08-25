import React from "react";
import {useState, useEffect} from "react";
import {Error} from "./Error.jsx"


export const Formulario = ({pacientes, setPacientes}) => {

    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validacion de formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log("Hay al menos un campo vacio")
            setError(true)
            return;
        }
        setError(false)

        // Objeto de paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            id: generarId()
        }

        setPacientes([...pacientes, objetoPaciente]);
        
        // Reiniciar el form
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }
    

	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h1 className="font-black text-3xl text-center">
            Seguimiento Pacientes
            </h1>
            <p className="text-xl mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
            {error && <Error>Todos los campos son obligatorios</Error>}
            {/* Si hay un error se muestra el texto a través de props Children desde Error.jsx */}

                <div className="mb-5">
                {/* el htmlFor es para hacer que cuando clickes en el label te redirija al input (los vincula) */}
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                    Nombre Mascota</label>
                    <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    ></input>
                </div>
                <div className="mb-5">
                {/* el htmlFor es para hacer que cuando clickes en el label te redirija al input (los vincula) */}
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                    Nombre Propietario</label>
                    <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    ></input>
                </div>
                <div className="mb-5">
                {/* el htmlFor es para hacer que cuando clickes en el label te redirija al input (los vincula) */}
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                    Email</label>
                    <input
                    id="email"
                    type="email"
                    placeholder="Email contacto propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="mb-5">
                {/* el htmlFor es para hacer que cuando clickes en el label te redirija al input (los vincula) */}
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                    Alta</label>
                    <input
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    ></input>
                </div>
                <div className="mb-5">
                {/* el htmlFor es para hacer que cuando clickes en el label te redirija al input (los vincula) */}
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                    Alta</label>
                    <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                     />
                </div>
                {/* cursor-pointer para que se ponga el dedito de pulsar
                transition para que sea una animacion acorde a un boton
                hover 
                 */}
                <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                hover:bg-indigo-700 cursor-pointer transition-all"
                value="Agregar paciente"
                >
                    
                </input>
            </form>
		</div>
	);
};
