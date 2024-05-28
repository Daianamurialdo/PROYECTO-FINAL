

function saludo (nombre){
var nombre = prompt("ingrese su nombre")
if(nombre === null || nombre === '' || nombre === undefined ){
    alert("ingrese su nombre")
    saludo()
}
else{
alert("bienvenido" +" "+ nombre)}}

saludo()

/*const $form = document.querySelector('#form')
 $form.addEventListener ('submit', datosenviados)*/
const form = document.getElementById("form")
form.addEventListener ('submit', datosenviados)
function datosenviados(event){
    event.preventDefault()
    alert("datos enviados")
                }
        