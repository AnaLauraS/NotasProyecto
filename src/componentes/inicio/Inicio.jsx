import React from "react"
import InicioEstilos from './InicioStyle.module.css'



export default function Inicio () {
    return <div className={InicioEstilos.divisor}>
        <button className={InicioEstilos.boton}>Nuevo proyecto</button>
        <button className={InicioEstilos.botonG}>guardar</button>
        <button className={InicioEstilos.boton}>Abrir proyecto</button>
    </div>
}