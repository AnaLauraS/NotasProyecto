import InicioEstilos from './InicioStyle.module.css'
import { agregarVolumen, arrayVolumen, notaDuplicada, nuevaNota, poblarVolumen, resetearCantidadVolumen, resetearInputs, validacionNombre } from "../inputs/funciones"
import { ArchivoContext, GuardarContext } from "../../context/ArchivoContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState, React, useContext } from 'react';

export default function Inicio () {

    const { archivo, setArchivo } = useContext(ArchivoContext);
    const { guardar, setGuardar } = useContext(GuardarContext);
    const [ esperandoGuardar, setEsperandoGuardar ] = useState(false);
    const [ listoParaGuardar, setListoParaGuardar ] = useState(false);
    const [ podemosBorrar, setPodemosBorrar ] = useState(false);
    const [ podemosImportar, setPodemosImportar ] = useState(false);
    const MySwal = withReactContent(Swal);


    // useEffect y funciones para guardar archivos
    useEffect(() =>{
        let volumenAingresar = arrayVolumen();
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
        } else if (volumenAingresar.length>0){
            setArchivo({
                ...archivo,
                volumen: {
                    ultimaAct: new Date(Date.now()).toISOString().split('T')[0],
                    volumen: volumenAingresar
                }
            }); 
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

            //la nota que estaba pasa al historial
            document.querySelector('#notas').value="";

            setGuardar(false)
            if (podemosImportar===false) {
                MySwal.fire({
                    title: <p>Proyecto guardado con el nombre "{nombreArchivo}.txt"</p>,
                    background: 'black',
                })
            }

            if (podemosBorrar){
                resetearInputs()
                resetearCantidadVolumen();
                reseteoContextArchivo()
                setPodemosBorrar(false);
            }
            if (podemosImportar){
                leerJson();
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
        document.querySelector('#fechaVolumen').value = dato.volumen.ultimaAct;
        document.querySelector('#notas').value = "";
        // poblamos volumen
        resetearCantidadVolumen()
        console.log(archivo.volumen)
        console.log(dato.volumen)
        console.log(dato.volumen.volumen)
        let arrayVol = document.querySelectorAll('#conjuntoVolumen > div.conj');
        arrayVol[0].children[0].querySelector('#op').value = dato.volumen.volumen[0].cantidadEjecuciones;
        arrayVol[0].children[0].querySelector('#tiempo').value = dato.volumen.volumen[0].tiempoDedicado;
        arrayVol[0].children[1].querySelector('#obs').value = dato.volumen.volumen[0].observaciones;
        if (dato.volumen.volumen.length>1){
            for (let i=1; i < dato.volumen.volumen.length; i++){
                agregarVolumen()
                poblarVolumen(dato.volumen, i)
            }
        }
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
                    resetearCantidadVolumen()
                    reseteoContextArchivo()
                    setGuardar(false)
                }
            })
        } else {
            resetearCantidadVolumen()
            resetearInputs()
            reseteoContextArchivo()
        }
    }

    // Consulto primero si tiene cambios para guardar. Sino, puede cargar nuevo archivo
    function abrirProyecto () {
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
                    setPodemosImportar(true);
                    exportar();
                } else if (result.isDenied) {
                    setPodemosImportar(true);
                    setGuardar(false)
                    leerJson();
                }
            })
        } else {
            setPodemosImportar(true);
            leerJson()
            }
    }

    // funcion para cargar json existente
    function leerJson () {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept= 'text/plain'
        input.click();
        input.onchange= () => {
            let json = input.files[0];
            if (!json) setPodemosImportar(false); ;
            if (json.type==="text/plain") {
                var lector = new FileReader();
                lector.onload = function(e) {
                    var contenido = JSON.parse(e.target.result);
                    cargaContextArchivo(contenido);
                };
                lector.readAsText(json);
            } else {
                MySwal.fire({
                    title: <p>No elegiste el formato correcto.</p>,
                    text: 'Recordá que solo abrimos archivos .txt',
                    background: 'black',
                });
            }
        }
        setPodemosImportar(false);
    }


    if (archivo.proceso===null) {
        return (
            <div className={InicioEstilos.divisor}>
                <button className={InicioEstilos.botonG} onClick={()=>{setArchivo({...archivo, proceso:""})}}>Nuevo proyecto</button>
                <button className={InicioEstilos.botonG} onClick={()=>{setArchivo({...archivo, proceso:""}); abrirProyecto()}}>Abrir proyecto</button>
            </div>
        )
    } else {
        return (
            <div className={InicioEstilos.divisor}>
                <button className={InicioEstilos.boton} onClick={crearNuevo}>Nuevo proyecto</button>
                <button className={InicioEstilos.botonG} onClick={exportar}>guardar</button>
                <button className={InicioEstilos.boton} onClick={abrirProyecto}>Abrir proyecto</button>
            </div>
        )
    }    
}