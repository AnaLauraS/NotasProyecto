import React from "react"
import ResumenEstilos from './ResumenStyle.module.css'

export default function Volumen () {
    return <div className={ResumenEstilos.card}>
        <div className={ResumenEstilos.card2}>
            <div className={ResumenEstilos.cabecera}>
                <h2>Volumetría</h2>
                <label className={ResumenEstilos.fecha} for="fechaVolumen">
                    <span className={ResumenEstilos.fecha}>Última actualización</span>
                    <input placeholder="" id="fechaVolumen" type="date" readOnly/>
                    
                </label>
            </div >
            <div className={ResumenEstilos.cabecera}>
            <label className={ResumenEstilos.inp2} for="op">
                <input placeholder="" id="op" type="number"/>
                <span className={ResumenEstilos.label}>Cantidad de operaciones por mes</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp2} for="tiempo">
                <input placeholder="" id="tiempo" type="number"/>
                <span className={ResumenEstilos.label}>Tiempo dedicado por operación en min.</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp2} for="fte">
                <input placeholder="" id="fte" type="text" readOnly/>
                <span className={ResumenEstilos.label}>FTEs calculados</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            </div>

            <label className={ResumenEstilos.inp} for="obs">
                <input placeholder="" id="obs" type="text"/>
                <span className={ResumenEstilos.label}>Observaciones</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            
            <button className={ResumenEstilos.boton}>+</button>
        </div>
    </div>
}