import React from "react"
import ResumenEstilos from './ResumenStyle.module.css'

export default function NotasAnteriores ({item}) {
    return <div className={ResumenEstilos.contenedorNota} >
                <label className={ResumenEstilos.fechaA} for="fechaAnterior">
                    <span className={ResumenEstilos.fechaA}>Fecha de reunión</span>
                    <input placeholder="" id="fechaAnterior" type="date" readOnly value={item.fecha}/>
                </label>
                <label className={ResumenEstilos.inpA} for="notasAnterior">
                    <textarea placeholder="" id="notasAnterior" readOnly value={item.notas}/>
                </label>
            </div>
}