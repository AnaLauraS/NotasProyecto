export function actualizarFecha(fecha) {
    let cuadro = document.querySelector('#'+fecha);
    cuadro.value = new Date(Date.now()).toISOString().split('T')[0];
}

export function agregarVolumen () {
    let cuadroVolumen = document.querySelector('#conjuntoVolumen');

    let divCabecera = Object.assign(document.createElement('div'),
    {className: "cabecera"});
    
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

    cuadroVolumen.appendChild(divCabecera)
    divCabecera.appendChild(label)
    label.appendChild(input)
    label.appendChild(span1)
    label.appendChild(span2)
    divCabecera.appendChild(label2)
    label2.appendChild(input2)
    label2.appendChild(span3)
    label2.appendChild(span21)
    cuadroVolumen.appendChild(label3)
    label3.appendChild(input3)
    label3.appendChild(span4)
    label3.appendChild(span22)
}
