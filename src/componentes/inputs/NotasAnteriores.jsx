import React from "react"
import ResumenEstilos from './ResumenStyle.module.css'

export default function NotasAnteriores ({item}) {
    return <div>
                <label className={ResumenEstilos.fecha} for="fechaAnterior">
                    <span className={ResumenEstilos.fecha}>Fecha de reunión</span>
                    <input placeholder="" id="fechaAnterior" type="date" readOnly value={item.fecha}/>
                </label>
                <label className={ResumenEstilos.inp} for="notasAnterior">
                    <textarea placeholder="" id="notasAnterior" readOnly value={item.nota}/>
                    <span className={ResumenEstilos.label}>Notas de reunión</span>
                    <span className={ResumenEstilos.focusBg}></span>
                </label>
            </div>

}