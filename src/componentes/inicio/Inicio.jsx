import InicioEstilos from './InicioStyle.module.css'
import { arrayVolumen, nuevaNota } from "../inputs/funciones"
import { ArchivoContext } from "../../context/ArchivoContext";
import { React, useContext } from "react"


export default function Inicio () {

    const { archivo, setArchivo } = useContext(ArchivoContext);

    function exportar () {
        let volumenAingresar = arrayVolumen();
        let notaAingresar = nuevaNota();
            
        if (volumenAingresar.length>0){
            setArchivo({
                ...archivo,
                volumen: {
                    ultimaAct: new Date(Date.now()).toISOString().split('T')[0],
                    volumen: volumenAingresar
                }
            })
        }

        if (notaAingresar!==undefined){
            if (archivo.notas[0].fecha!==""){
                let arrayNotas = []
                arrayNotas = archivo.notas;
                arrayNotas.push(notaAingresar);
                setArchivo({
                    ...archivo,
                    notas: arrayNotas
                })
            } else {
                setArchivo({
                    ...archivo,
                    notas: [notaAingresar]
                })
            }
        }

        // descargar archivo
        let archivoJson = JSON.stringify(archivo);
        let nombreArchivo = archivo.proceso;
        
        const a = document.createElement("a");
        const archivoA = new Blob([archivoJson], { type: 'text/plain' });
        const url = URL.createObjectURL(archivoA);
        a.href = url;
        a.download = nombreArchivo+".txt";
        a.click();
        URL.revokeObjectURL(url);
    }

    return <div className={InicioEstilos.divisor}>
        <button className={InicioEstilos.boton}>Nuevo proyecto</button>
        <button className={InicioEstilos.botonG} onClick={exportar}>guardar</button>
        <button className={InicioEstilos.boton}>Abrir proyecto</button>
    </div>
}