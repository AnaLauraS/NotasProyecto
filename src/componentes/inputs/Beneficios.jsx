import { React, useContext } from "react"
import ResumenEstilos from './ResumenStyle.module.css'
import { ArchivoContext, GuardarContext } from "../../context/ArchivoContext"
import {actualizarFecha} from "./funciones";

export default function Beneficios () {

    const { archivo, setArchivo } = useContext(ArchivoContext);
    const { setGuardar } = useContext(GuardarContext);

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
                <textarea placeholder=" " id="beneficios" rows="5" onChange={(e) => {
                    actualizarFecha("fechaBeneficios");
                    setArchivo({...archivo, beneficios: {
                        detalle: e.target.value,
                        ultimaAct: document.querySelector('#fechaBeneficios').value}});
                    setGuardar(true)
                    }}/>
                <span className={ResumenEstilos.label}>Detalle de beneficios</span>
                <span className={ResumenEstilos.focusBg}></span>
            </label>
        </div>
    </div>
}