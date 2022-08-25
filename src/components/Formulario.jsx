import React from "react";
import { useState, useEffect } from "react";
import { Error } from "./Error.jsx";

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	// generador de Id
	const generarId = () => {
		const random = Math.random().toString(36).substr(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validacion de formulario
		if ([nombre, propietario, email, fecha, sintomas].includes("")) {
			console.log("Hay al menos un campo vacio");
			setError(true);
			return;
		}
		setError(false);

		// Objeto de paciente
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		};

        if(paciente.id){
            // Editando el registro
            // Le asigna al nuevo objeto (el de la ediccion) la id del objeto que vamos a editar
            // para que cuando le demos al handleSubmit el nuevo objeto sustituya al antiguo con
            // la misma id y de esta forma parece que se ha editado.
            objetoPaciente.id = paciente.id
            // Se hace un mapeo de todos los pacientes y cuando se encuentre al paciente con
            // la misma id del objeto que se ha editado, se sustituye
            const pacientesActualizados = pacientes.map(pacienteState => 
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
                
            setPacientes(pacientesActualizados)

            // Limpiamos Paciente de la memoria volviendolo a objeto vacio
            setPaciente({})
        } else {
            // Nuevo registro
            // Se añade al objeto ya creado una nueva key value con la id generada.
            objetoPaciente.id = generarId()
            // Se copian todos los pacientes y se añade el nuevo
            setPacientes([...pacientes, objetoPaciente]);
        }

		

		// Reiniciar el form
		setNombre("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
	};

	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
			<p className="text-xl mt-5 text-center mb-10">
				Añade pacientes y {""}
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
					<label
						htmlFor="mascota"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Mascota
					</label>
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
					<label
						htmlFor="propietario"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Propietario
					</label>
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
					<label
						htmlFor="email"
						className="block text-gray-700 uppercase font-bold"
					>
						Email
					</label>
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
					<label
						htmlFor="alta"
						className="block text-gray-700 uppercase font-bold"
					>
						Alta
					</label>
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
					<label
						htmlFor="alta"
						className="block text-gray-700 uppercase font-bold"
					>
						Alta
					</label>
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

					//Si existe ID en el objeto paciente, editar sino agregar
					value={paciente.id ? "Editar Paciente" : "Agregar paciente"}
				></input>
			</form>
		</div>
	);
};
