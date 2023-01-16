import { ArchivoProvider } from "./context/ArchivoProvider";
import './App.css';
import Inicio from './componentes/inicio/Inicio';
import Resumen from "./componentes/inputs/Resumen";
import Volumen from "./componentes/inputs/Volumen";
import Beneficios from "./componentes/inputs/Beneficios";
import Proceso from "./componentes/inputs/Proceso";

function App() {
  return (
    <ArchivoProvider>
      <div className="App">
        <div className="App-header">
          <Inicio/>
          <div className="App-principal">
            <Proceso/>
            <div className="App-detalles">
              <Resumen/>
              <Volumen/>
              <Beneficios/>
            </div>
          </div>
        </div>
      </div>
    </ArchivoProvider>
  );
}

export default App;
