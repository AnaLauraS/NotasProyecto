import { React, useState, useEffect, useContext } from "react"
import ResumenEstilos from './ResumenStyle.module.css'
import { ArchivoContext } from "../../context/ArchivoContext"
import {actualizarFecha} from "./funciones";



export default function Resumen () {

    const { archivo, setArchivo } = useContext(ArchivoContext);

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
                <input id="area" type="text" placeholder=" " onChange={(e) => {setArchivo({...archivo, resumen: {...archivo.resumen, area: e.target.value}}); actualizarFecha("fechaResumen")}}/>
                <span className={ResumenEstilos.label}>Área</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="ubi">
                <input placeholder=" " id="ubi" type="text" onChange={(e) => {setArchivo({...archivo, resumen: {...archivo.resumen, ubicacionMapaProceso: e.target.value}}); actualizarFecha("fechaResumen")}}/>
                <span className={ResumenEstilos.label}>Ubicación en mapa de procesos</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="usuarios">
                <input placeholder=" " id="usuarios" type="text" onChange={(e) => {setArchivo({...archivo, resumen: {...archivo.resumen, usuarios: e.target.value}}); actualizarFecha("fechaResumen")}}/>
                <span className={ResumenEstilos.label}>Usuarios</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="sponsor">
                <input placeholder=" " id="sponsor" type="text" onChange={(e) => {setArchivo({...archivo, resumen: {...archivo.resumen, sponsor: e.target.value}}); actualizarFecha("fechaResumen")}}/>
                <span className={ResumenEstilos.label}>Sponsor</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="brm">
                <input placeholder=" " id="brm" type="text" onChange={(e) => {setArchivo({...archivo, resumen: {...archivo.resumen, BRM: e.target.value}}); actualizarFecha("fechaResumen")}}/>
                <span className={ResumenEstilos.label}>BRM</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
        </div>
    </div>
}