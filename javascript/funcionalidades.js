/* tarea 10 */

var nombre = "daiana";
var apellido = "murialdo";       
{
    console.log(nombre+" "+apellido);
}


/* tarea 11 */

var helado = 10 ;
var topping ;
var precio = 0 ;
var preciofinal ;

var topping = prompt("ingrese topping");
if(topping == "oreo"){
    precio = 10;
}

else if(topping == "kitkat")
    {
        precio = 15;
}
    
else if(topping == "kinder")
        {
         precio = 25;   
        }
else
{
    console.log("no tenemos este topping");
}  

if(precio != 0) {
    preciofinal = helado + precio;
     console.log("el helado cuesta $" + preciofinal);}

     /* switch */
var menu = prompt("ingrese menu");

switch(menu.toLowerCase()){
    case "carne": 
    console.log("recomendamos acompañarlo con vino tinto");
    break;
    case "pescado":
        console.log("recomendamos acompañarlo con vino blanco");
    break;
    case "verdura":
        console.log("recomendamos acompañarlo con agua");
        break;
    default:
        console.log("elija carne, pescado o verdura")
        
}
/* array for */
var arrayhelados = ["chocolate","frutilla","vainilla"]
for(let posicion = 0; posicion < arrayhelados.length; posicion++){
    console.log(arrayhelados[posicion]);
}
arrayhelados.push("dulce de leche");
for(let posicion = 0; posicion < arrayhelados.length; posicion++){
    console.log(arrayhelados[posicion]);}

/* while */
var numero = 0
while (numero <= 11){
    console.log("numero es mas chico que 11");
    numero++
    }



