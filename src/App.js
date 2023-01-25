import { ArchivoProvider } from "./context/ArchivoProvider";
import {GuardarProvider} from "./context/GuardarProvider"
import { React } from "react"
import './App.css';
import Inicio from './componentes/inicio/Inicio';
import Inputs from "./componentes/inicio/Inputs";

function App() {

  return (
    <ArchivoProvider>
      <GuardarProvider>
        <div className="App">
          <div className="App-header">
            <Inicio />
            <Inputs />
          </div>
        </div>
      </GuardarProvider>
    </ArchivoProvider>
  );
}

export default App;
