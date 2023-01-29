import InicioEstilos from './InicioStyle.module.css'
import { arrayVolumen, notaDuplicada, nuevaNota, resetearInputs, validacionNombre } from "../inputs/funciones"
import { ArchivoContext, GuardarContext } from "../../context/ArchivoContext";
import { React, useContext } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Inicio () {

    const { archivo, setArchivo } = useContext(ArchivoContext);
    const { guardar, setGuardar } = useContext(GuardarContext);
    const [ esperandoGuardar, setEsperandoGuardar ] = useState(false);
    const [ listoParaGuardar, setListoParaGuardar ] = useState(false);
    const [ podemosBorrar, setPodemosBorrar ] = useState(false);
    const MySwal = withReactContent(Swal);

    // useEffect y funciones para guardar archivos
    useEffect(() =>{
        let volumenAingresar = arrayVolumen();
        if (volumenAingresar.length>0){
            setArchivo({
                ...archivo,
                volumen: {
                    ultimaAct: new Date(Date.now()).toISOString().split('T')[0],
                    volumen: volumenAingresar
                }
            }); 
        }
        let notaAingresar = nuevaNota();
        if (notaDuplicada(archivo.notas, notaAingresar)===false) {
            if (notaAingresar!==undefined){
                if (archivo.notas[0].fecha!=="" & notaAingresar.notas!==""){
                    let arrayNotas = []
                    arrayNotas = archivo.notas;
                    arrayNotas.push(notaAingresar);
                    if (volumenAingresar.length>0){
                        setArchivo({
                            ...archivo,
                            volumen: {
                                ultimaAct: new Date(Date.now()).toISOString().split('T')[0],
                                volumen: volumenAingresar
                            },
                            notas: arrayNotas
                        })
                    } else {
                        setArchivo({
                            ...archivo,
                            notas: arrayNotas
                        })
                    }                    
                } else if (archivo.notas[0].fecha==="" & notaAingresar.notas!=="") {
                    if (volumenAingresar.length>0){
                        setArchivo({
                            ...archivo,
                            volumen: {
                                ultimaAct: new Date(Date.now()).toISOString().split('T')[0],
                                volumen: volumenAingresar
                            },
                            notas: [notaAingresar]
                        })
                    } else {
                        setArchivo({
                            ...archivo,
                            notas: [notaAingresar]
                        })
                    }
                }
            }
        }
        setListoParaGuardar(!listoParaGuardar)       
    }, [esperandoGuardar])

    useEffect(() =>{
        if (guardar===true | archivo.volumen.ultimaAct === new Date(Date.now()).toISOString().split('T')[0]){
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
            MySwal.fire({
                title: <p>Proyecto guardado con el nombre "{nombreArchivo}.txt"</p>,
                background: 'black',
            })

            if (podemosBorrar){
                resetearInputs()
                reseteoContextArchivo()
                setPodemosBorrar(false);
            }
        }
    }, [listoParaGuardar])

    function exportar () {
        if (guardar===false & document.querySelector('#fechaVolumen').value !== new Date(Date.now()).toISOString().split('T')[0]){
            MySwal.fire({
                title: <p>No tenés cambios para guardar</p>,
                background: 'black',
            })
        } else {
            if (validacionNombre()===false) {
                MySwal.fire({
                    title: <p>¡El proyecto no tiene nombre!</p>,
                    text: 'Ponele uno así lo guardamos',
                    icon: 'warning',
                    background: 'black',
                    didClose: ()=>{document.querySelector('#nombreProceso').focus()}
                })
            } else {
                setEsperandoGuardar(!esperandoGuardar)
            }
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

    // cargar context desde archivo
    function cargaContextArchivo(dato) {
        setArchivo({
            proceso: dato.proceso,
            resumen: dato.resumen,
            volumen: dato.volumen,
            beneficios: dato.beneficios,
            notas: dato.notas
        });
        document.querySelector('#nombreProceso').value = dato.proceso;
        document.querySelector('#fechaResumen').value = dato.resumen.ultimaAct;
        document.querySelector('#area').value = dato.resumen.area;
        document.querySelector('#ubi').value = dato.resumen.ubicacionMapaProceso;
        document.querySelector('#usuarios').value = dato.resumen.usuarios;
        document.querySelector('#sponsor').value = dato.resumen.sponsor;
        document.querySelector('#brm').value = dato.resumen.BRM;
        document.querySelector('#fechaBeneficios').value = dato.beneficios.ultimaAct;
        document.querySelector('#beneficios').value = dato.beneficios.detalle;
        // hacer lo de volumen y lo de notas anteriores
    }

    // si no hay cambios o si no le importa los cambios, abro un nuevo proyecto
    function crearNuevo() {
        if (guardar===true){
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
                    setPodemosBorrar(true);
                    exportar()
                } else if (result.isDenied) {
                    resetearInputs()
                    reseteoContextArchivo()
                    setGuardar(false)
                }
            })
        } else {
            resetearInputs()
            reseteoContextArchivo()
        }
    }

    // funcion para cargar json existente
    function prueb () {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept= 'text/plain'
        input.click();
        input.onchange= () => {
            let json = input.files[0];
            if (!json) return;
            if (json.type==="text/plain") {
                var lector = new FileReader();
                lector.onload = function(e) {
                    var contenido = JSON.parse(e.target.result);
                    cargaContextArchivo(contenido);
                    console.log(archivo);
                };
                lector.readAsText(json);
            } else return "error";
        }

    }


    if (archivo.proceso===null) {
        return (
            <div className={InicioEstilos.divisor}>
                <button className={InicioEstilos.botonG} onClick={()=>{setArchivo({...archivo, proceso:""})}}>Nuevo proyecto</button>
                <button className={InicioEstilos.botonG} onClick={prueb}>Abrir proyecto</button>
            </div>
        )
    } else {
        return (
            <div className={InicioEstilos.divisor}>
                <button className={InicioEstilos.boton} onClick={crearNuevo}>Nuevo proyecto</button>
                <button className={InicioEstilos.botonG} onClick={()=>exportar()}>guardar</button>
                <button className={InicioEstilos.boton} onClick={prueb}>Abrir proyecto</button>
            </div>
        )
    }    
}