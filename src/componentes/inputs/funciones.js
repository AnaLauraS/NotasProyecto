export function actualizarFecha(fecha) {
    let cuadro = document.querySelector('#'+fecha);
    cuadro.value = new Date(Date.now()).toISOString().split('T')[0];
}

export function agregarVolumen () {
    let cuadroVolumen = document.querySelector('#conjuntoVolumen');

    let divCabecera = Object.assign(document.createElement('div'),
    {className: "cabecera"});

    let separador = Object.assign(document.createElement('div'),
    {className: "conj"});
    
    let label = Object.assign(document.createElement('label'),
    {className: "inp2",
    for: "op"});

    let input = Object.assign(document.createElement('input'),
    {onchange: function () {actualizarFecha('fechaVolumen')},
    id: "op",
    placeholder: " ",
    type: "number"})

    let span1 = Object.assign(document.createElement('span'),
    {className: "label"})
    span1.innerText="Cantidad de operaciones por mes"

    let span2 = Object.assign(document.createElement('span'),
    {className: "focusBg"})

    let label2 = Object.assign(document.createElement('label'),
    {className: "inp2",
    for: "tiempo"});

    let input2 = Object.assign(document.createElement('input'),
    {onchange: function () {actualizarFecha('fechaVolumen')},
    id: "tiempo",
    placeholder: " ",
    type: "number"})

    let span3 = Object.assign(document.createElement('span'),
    {className: "label"})
    span3.innerText="Tiempo dedicado por operación en min."

    let span21 = Object.assign(document.createElement('span'),
    {className: "focusBg"})

    let label3 = Object.assign(document.createElement('label'),
    {className: "inp",
    for: "obs"});

    let input3 = Object.assign(document.createElement('input'),
    {onchange: function () {actualizarFecha('fechaVolumen')},
    id: "obs",
    placeholder: " ",
    type: "text"})

    let span4 = Object.assign(document.createElement('span'),
    {className: "label"})
    span4.innerText="Observaciones"

    let span22 = Object.assign(document.createElement('span'),
    {className: "focusBg"})

    cuadroVolumen.appendChild(separador)
    separador.appendChild(divCabecera)
    divCabecera.appendChild(label)
    label.appendChild(input)
    label.appendChild(span1)
    label.appendChild(span2)
    divCabecera.appendChild(label2)
    label2.appendChild(input2)
    label2.appendChild(span3)
    label2.appendChild(span21)
    separador.appendChild(label3)
    label3.appendChild(input3)
    label3.appendChild(span4)
    label3.appendChild(span22)
}

// para completar el context, tengo que recuperar todos los items de volumetria y todos los items de notas.
export function arrayVolumen () {
    let arrayVol = document.querySelectorAll('#conjuntoVolumen > div.conj');
    let volumenAingresar = []
    
    for (let i=0; i<arrayVol.length; i++){
        
        let valorCantidad = arrayVol[i].children[0].querySelector('#op').value;
        let valorMinutos = arrayVol[i].children[0].querySelector('#tiempo').value;
        let valorObs = arrayVol[i].children[1].querySelector('#obs').value;

        if (valorCantidad!=="" | valorMinutos!=="" | valorObs!=="") {
            let conjunto = {
                cantidadEjecuciones: valorCantidad,
                tiempoDedicado: valorMinutos,
                observaciones: valorObs
            }
            volumenAingresar.push(conjunto)
        }
    }
}

export function nuevaNota () {
    let nuevaNota = document.querySelector('#notas');
    if (nuevaNota.value!==""){
        let notaAingresar = {
            fecha: new Date(Date.now()).toISOString().split('T')[0],
            notas: nuevaNota.value
        }
        return notaAingresar
    }
}