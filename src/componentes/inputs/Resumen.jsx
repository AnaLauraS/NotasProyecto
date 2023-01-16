import React from "react"
import ResumenEstilos from './ResumenStyle.module.css'

export default function Resumen () {
    return <div className={ResumenEstilos.card}>
        <div className={ResumenEstilos.card2}>
            <div className={ResumenEstilos.cabecera}>
                <h2>Resumen</h2>
                <label className={ResumenEstilos.fecha} for="fechaResumen">
                    <span className={ResumenEstilos.fecha}>Última actualización</span>
                    <input placeholder="" id="fechaResumen" type="date" readOnly/>
                    
                </label>
            </div>
            <label className={ResumenEstilos.inp} for="area">
                <input placeholder="" id="area" type="text"/>
                <span className={ResumenEstilos.label}>Área</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="ubi">
                <input placeholder="" id="ubi" type="text"/>
                <span className={ResumenEstilos.label}>Ubicación en mapa de sistema</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="usuarios">
                <input placeholder="" id="usuarios" type="text"/>
                <span className={ResumenEstilos.label}>Usuarios</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="sponsor">
                <input placeholder="" id="sponsor" type="text"/>
                <span className={ResumenEstilos.label}>Sponsor</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
            <label className={ResumenEstilos.inp} for="brm">
                <input placeholder="" id="brm" type="text"/>
                <span className={ResumenEstilos.label}>BRM</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
        </div>
    </div>
}