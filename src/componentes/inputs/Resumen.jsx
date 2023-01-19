import { React, useState, useEffect, useContext } from "react"
import ResumenEstilos from './ResumenStyle.module.css'
import { ArchivoContext } from "../../context/ArchivoContext"



export default function Resumen () {

    const { archivo, setArchivo } = useContext(ArchivoContext);

    function actualizarEstado (e, lugar) {
        let informacion = e.target.value;
        setArchivo({
            ...archivo,
            lugar: informacion
            // resumen: {
            //     ...archivo.resumen,
            //     area: informacion
            // }
        })
        console.log(archivo)
        console.log(informacion)
        console.log(lugar)
    }

    function prueba (lotra, texto) {
        console.log(lotra.target.value)
        console.log(texto)
    }

    function prueba2 (lotra) {
        console.log(lotra.target.value)
    }


    return <div className={ResumenEstilos.card}>
        <div className={ResumenEstilos.card2}>
            <div className={ResumenEstilos.cabecera}>
                <h2>Detalles del proyecto</h2>
                <label className={ResumenEstilos.fecha} for="fechaResumen">
                    <span className={ResumenEstilos.fecha}>Última actualización</span>
                    <input placeholder="" id="fechaResumen" type="date" readOnly/>
                    
                </label>
            </div>
            <label className={ResumenEstilos.inp} for="area">
                <input id="area" type="text" placeholder=" " onChange={(e) => {actualizarEstado(e, archivo.proceso)}}/>
                <span className={ResumenEstilos.label}>Área</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="ubi">
                <input placeholder=" " id="ubi" type="text"/>
                <span className={ResumenEstilos.label}>Ubicación en mapa de sistema</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="usuarios">
                <input placeholder=" " id="usuarios" type="text"/>
                <span className={ResumenEstilos.label}>Usuarios</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="sponsor">
                <input placeholder=" " id="sponsor" type="text"/>
                <span className={ResumenEstilos.label}>Sponsor</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="brm">
                <input placeholder=" " id="brm" type="text"/>
                <span className={ResumenEstilos.label}>BRM</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
        </div>
    </div>
}