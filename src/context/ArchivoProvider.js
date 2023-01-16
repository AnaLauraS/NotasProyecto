import { useState } from "react";
import { ArchivoContext } from "./ArchivoContext"


export const ArchivoProvider = ({ children }) => {

    const [archivo, setArchivo] = useState(null);

  return (
    <ArchivoContext.Provider value={{archivo, setArchivo}}>
        { children }
    </ArchivoContext.Provider>
  )
}
