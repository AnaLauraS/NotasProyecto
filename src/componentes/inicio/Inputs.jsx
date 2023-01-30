import '../../App.css';
import Resumen from "../inputs/Resumen";
import Volumen from "../inputs/Volumen";
import Beneficios from "../inputs/Beneficios";
import Proceso from "../inputs/Proceso";
import { ArchivoContext } from "../../context/ArchivoContext";
import { React, useContext, useState, useEffect } from "react"

export default function Inputs() {

    const { archivo } = useContext(ArchivoContext);
    const [ notasViejas, setNotasViejas ] = useState("")
    
    useEffect(()=>{
        setNotasViejas(archivo.notas)
    }, [archivo.notas])
   
    if (archivo.proceso!==null) {
        return (
            <div className="App-principal">
              <Proceso notasViejas={notasViejas}/>
              <div className="App-detalles">
                <Resumen/>
                <Volumen/>
                <Beneficios/>
              </div>
            </div>
        )
    } else return null
  
}