import React from "react"
import ResumenEstilos from './ResumenStyle.module.css'

export default function Proceso () {
    return <div className={ResumenEstilos.card}>
        <div className={ResumenEstilos.card3}>
            <div className={ResumenEstilos.cabeceraProceso}>
                <h1>Proceso:</h1>
                <label className={ResumenEstilos.inp3} for="nombreProceso">
                    <input placeholder="" id="nombreProceso" />
                    <span className={ResumenEstilos.focusBg}></span>
                </label>
            </div>
            <div className={ResumenEstilos.registroNotas}>
                <label className={ResumenEstilos.fecha} for="fechaActual">
                    <span className={ResumenEstilos.fecha}>Fecha de la reunión</span>
                    <input placeholder="" id="fechaActual" type="date" readOnly/>
                </label>
                <label className={ResumenEstilos.inpT} for="notas">
                    <textarea placeholder=" " id="notas" style={{"height": "50vh"}}/>
                    <span className={ResumenEstilos.label}>Notas de la reunión</span>
                    <span className={ResumenEstilos.focusBg}></span>
                </label>
            </div>
            <hr />
            <p>Aun no existe historial de reuniones</p>
            {/*aca va el elemento hijo que levanta todo lo anterior*/}
        </div>
    </div>
}