import { useState } from "react";
// import "/src/index.css";
import { Header } from "./components/Header.jsx";
import { Formulario } from "./components/Formulario.jsx";
import { ListadoPacientes } from "./components/ListadoPacientes.jsx";

function App() {
	const [pacientes, setPacientes] = useState([])

	return (
		<div className="container mx-auto">
			<Header 

			/>
			<div className="mt-12 md:flex ">
				<Formulario
				pacientes={pacientes}
				setPacientes={setPacientes}
				 />
				<ListadoPacientes 
					pacientes={pacientes}
				/>
			</div>
		</div>
	);
}

export default App;
