import React from "react"
import InicioEstilos from './InicioStyle.module.css'
import { arrayVolumen, nuevaNota } from "../inputs/funciones"


export default function Inicio () {
    return <div className={InicioEstilos.divisor}>
        <button className={InicioEstilos.boton}>Nuevo proyecto</button>
        <button className={InicioEstilos.botonG} onClick={nuevaNota}>guardar</button>
        <button className={InicioEstilos.boton}>Abrir proyecto</button>
    </div>
}