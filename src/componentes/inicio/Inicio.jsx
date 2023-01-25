import InicioEstilos from './InicioStyle.module.css'
import { arrayVolumen, notaDuplicada, nuevaNota, resetearInputs, validacionNombre } from "../inputs/funciones"
import { ArchivoContext, GuardarContext } from "../../context/ArchivoContext";
import { React, useContext } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Inicio () {

    const { archivo, setArchivo } = useContext(ArchivoContext);
    const { guardar, setGuardar } = useContext(GuardarContext);

    function exportar () {
        if (validacionNombre()===false) {
            alert ("No te olvidés de ponerle nombre al proceso para guardarlo!")
        } else {
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

            if (notaDuplicada(archivo.notas, notaAingresar)===false) {
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

            setGuardar(false)
        }
    }

    // reseteo del context archivo
    function reseteoContextArchivo() {
        setArchivo({
            proceso: "",
            resumen: {
              ultimaAct: "",
              area: "",
              ubicacionMapaProceso: "",
              usuarios: "",
              sponsor: "",
              BRM: ""
            },
            volumen: [ {
              ultimaAct: "",
              cantidadEjecuciones: 0,
              tiempoDedicado: 0,
              observaciones: ""
            } ],
            beneficios: {
              ultimaAct: "",
              detalle: ""
            },
            notas: [ {
              fecha: "", 
              nota:""
            }]
          });
    }

    // si no hay cambios o si no le importa los cambios, abro un nuevo proyecto
    function crearNuevo() {
        if (guardar===true){
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: <p>Tenes cambios sin guardar. ¿Guardamos?</p>,
                icon: 'question',
                iconColor: 'orange',
                showCancelButton: true,
                showDenyButton: true,
                confirmButtonText: "SÍ, guardemos",
                denyButtonText: "NO, borrá todo",
                cancelButtonText: "Cancelar",
                background: 'black',
            })
            .then((result)=>{
                if (result.isConfirmed) {
                    exportar()
                    resetearInputs()
                    reseteoContextArchivo()
                } else if (result.isDenied) {
                    resetearInputs()
                    reseteoContextArchivo()
                    setGuardar(false)
                }
            })
        }
    }


    if (archivo.proceso===null) {
        return (
            <div className={InicioEstilos.divisor}>
                <button className={InicioEstilos.botonG} onClick={()=>{setArchivo({...archivo, proceso:""})}}>Nuevo proyecto</button>
                <button className={InicioEstilos.botonG}>Abrir proyecto</button>
            </div>
        )
    } else {
        return (
            <div className={InicioEstilos.divisor}>
                <button className={InicioEstilos.boton} onClick={crearNuevo}>Nuevo proyecto</button>
                <button className={InicioEstilos.botonG} onClick={exportar}>guardar</button>
                <button className={InicioEstilos.boton}>Abrir proyecto</button>
            </div>
        )
    }    
}