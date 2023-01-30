import { React, useContext } from "react"
import { ArchivoContext, GuardarContext } from "../../context/ArchivoContext"
import NotasAnteriores from "./NotasAnteriores";
import ResumenEstilos from './ResumenStyle.module.css'

export default function Proceso ({notasViejas}) {

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
            
            <div id="notasAnteriores" className={ResumenEstilos.notasAnteriores}>
                {notasViejas.length===1 & notasViejas[0].fecha===""?
                    <p>Aun no existe historial de reuniones</p>
                    : 
                    notasViejas.map((item, index) => (<NotasAnteriores item={item} key={index} />)) 
                }    
            </div>
        </div>
    </div>
}