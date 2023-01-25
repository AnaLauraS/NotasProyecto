import { useState } from "react";
import { GuardarContext } from "./ArchivoContext"


export const GuardarProvider = ({ children }) => {

    const [guardar, setGuardar] = useState(false);

  return (
    <GuardarContext.Provider value={{guardar, setGuardar}}>
        { children }
    </GuardarContext.Provider>
  )
}
