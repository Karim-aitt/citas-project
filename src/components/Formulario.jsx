import React from "react";

export const Formulario = () => {
	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h1 className="font-black text-3xl text-center">
            Seguimiento Pacientes
            </h1>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                {/* el htmlFor es para hacer que cuando clickes en el label te redirija al input (los vincula) */}
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                    Nombre Mascota</label>
                    <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
