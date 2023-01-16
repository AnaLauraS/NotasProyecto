import React from "react"
import ResumenEstilos from './ResumenStyle.module.css'

export default function Beneficios () {
    return <div className={ResumenEstilos.card}>
        <div className={ResumenEstilos.card2}>
            <div className={ResumenEstilos.cabecera}>
                <h2>Beneficios</h2>
                <label className={ResumenEstilos.fecha} for="fechaBeneficios">
                    <span className={ResumenEstilos.fecha}>Última actualización</span>
                    <input placeholder="" id="fechaBeneficios" type="date" readOnly/>
                    
                </label>
            </div >
            <label className={ResumenEstilos.inp} for="beneficios">
                <textarea placeholder="" id="beneficios" rows="50" style={{"paddingTop": "40px", "height": "200px"}}/>
                <span className={ResumenEstilos.label}>Detalle de beneficios</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
        </div>
    </div>
}