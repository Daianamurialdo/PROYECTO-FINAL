/* tarea 12

function saludo (nombre){
var nombre = prompt("ingrese su nombre")
if(nombre === null || nombre === '' || nombre === undefined ){
    alert("ingrese su nombre")
    saludo()
}
else{
alert("bienvenido" +" "+ nombre)}}

saludo() */
document.addEventListener("DOMContentLoaded", () => {

var $form = document.getElementById("form");

$form.addEventListener ('submit', datosenviados);

function datosenviados(event){
    event.preventDefault()
    alert("datos enviados");
}
});