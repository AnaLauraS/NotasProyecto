import { React, useState, useEffect, useContext } from "react"
import ResumenEstilos from './ResumenStyle.module.css'
import { ArchivoContext } from "../../context/ArchivoContext"
import {actualizarFecha} from "./funciones";

export default function Beneficios () {

    const { archivo, setArchivo } = useContext(ArchivoContext);

    return <div className={ResumenEstilos.card}>
        <div className={ResumenEstilos.card2}>
            <div className={ResumenEstilos.cabecera}>
                <h2>Beneficios</h2>
                <label className={ResumenEstilos.fecha} for="fechaBeneficios">
                    <span className={ResumenEstilos.fecha}>Última actualización</span>
                    <input placeholder="" id="fechaBeneficios" type="date" readOnly />
                    
                </label>
            </div >
            <label className={ResumenEstilos.inp} for="beneficios">
                <textarea placeholder=" " id="beneficios" rows="5" onChange={(e) => {setArchivo({...archivo, beneficios: {...archivo.beneficios, detalle: e.target.value}}); actualizarFecha("fechaBeneficios")}}/>
                <span className={ResumenEstilos.label}>Detalle de beneficios</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
        </div>
    </div>
}