import { useState } from "react";
import { ArchivoContext } from "./ArchivoContext"


export const ArchivoProvider = ({ children }) => {

    const [archivo, setArchivo] = useState({
      proceso: null,
      resumen: {
        ultimaAct: "",
        area: "",
        ubicacionMapaProceso: "",
        usuarios: "",
        sponsor: "",
        BRM: ""
      },
      volumen: [ {
        ultimaAct: "",
        cantidadEjecuciones: 0,
        tiempoDedicado: 0,
        observaciones: ""
      } ],
      beneficios: {
        ultimaAct: "",
        detalle: ""
      },
      notas: [ {
        fecha: "",
        notas: ""
      } ]
    });

  return (
    <ArchivoContext.Provider value={{archivo, setArchivo}}>
        { children }
    </ArchivoContext.Provider>
  )
}
