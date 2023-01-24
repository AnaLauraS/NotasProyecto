import { ArchivoProvider } from "./context/ArchivoProvider";
import { React } from "react"
import './App.css';
import Inicio from './componentes/inicio/Inicio';
import Inputs from "./componentes/inicio/Inputs";

function App() {
  return (
    <ArchivoProvider>
      <div className="App">
        <div className="App-header">
          <Inicio/>
          <Inputs/>
        </div>
      </div>
    </ArchivoProvider>
  );
}

export default App;
