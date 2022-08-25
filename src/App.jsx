import { useState, useEffect } from "react";
// import "/src/index.css";
import { Header } from "./components/Header.jsx";
import { Formulario } from "./components/Formulario.jsx";
import { ListadoPacientes } from "./components/ListadoPacientes.jsx";

function App() {
	const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
	// Sirve para setear pacientes si existe "pacientes" en localStorage al cargar la página,
	// si no existe "pacientes" crea []
	
	const [paciente, setPaciente] = useState({});

	const eliminarPaciente = id => {
		const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
		setPacientes(pacientesActualizados)
	}

	
	

	// Almacena en localStorage en base a modificaciones de "pacientes"
	useEffect(() => {
		localStorage.setItem("pacientes", JSON.stringify(pacientes))
	}, [pacientes])

	return (
		<div className="container mx-auto">
			<Header 

			/>
			<div className="mt-12 md:flex ">
				<Formulario
				pacientes={pacientes}
				setPacientes={setPacientes}
				paciente={paciente}
				// para limpiar paciente de la memoria
				setPaciente={paciente}
				 />
				<ListadoPacientes 
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;
