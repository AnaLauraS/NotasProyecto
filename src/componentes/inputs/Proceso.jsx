import { React, useContext } from "react"
import { ArchivoContext, GuardarContext } from "../../context/ArchivoContext"
import ResumenEstilos from './ResumenStyle.module.css'

export default function Proceso () {

    const { archivo, setArchivo } = useContext(ArchivoContext);
    const { setGuardar } = useContext(GuardarContext);

    return <div className={ResumenEstilos.card}>
        <div className={ResumenEstilos.card3}>
            <div className={ResumenEstilos.cabeceraProceso}>
                <h1>Proceso:</h1>
                <label className={ResumenEstilos.inp3} for="nombreProceso">
                    <input placeholder="" id="nombreProceso" onChange={(e) => {setArchivo({...archivo, proceso: e.target.value}); setGuardar(true)}}/>
                    <span className={ResumenEstilos.focusBg}></span>
                </label>
            </div>
            <div className={ResumenEstilos.registroNotas}>
                <label className={ResumenEstilos.inpT} for="notas">
                    <textarea placeholder=" " id="notas" style={{"height": "50vh"}} onChange={() => {setGuardar(true)}}/>
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