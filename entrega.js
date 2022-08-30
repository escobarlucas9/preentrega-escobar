//Mi idea es que el cliente primero se registre y le pido un id si es su primera ves no lo va tener ya que en la barberia se lo dimos, despues tiene que elegir el servicio que desea y con ese id si es que tiene se le va hacer un descuento del 10% 

//Un objeto donde le voy a pedir al cliente que se registre
class Cliente {
    constructor (nombre,apellido,email,id) {
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.id = id;
}
}
//array vacio donde el van a ingresar los valores atraves de prompt
let datos_cliente = [];
let nombre = prompt("Bienvenidos a Barberia el patron, Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let email = prompt("Ingrese su email para despues comunicarnos con usted");
let id = prompt("Ingrese su id de 6 digitos si no tiene ingreso 0");
let nuevo_cliente = new Cliente(nombre,apellido,email,id);
datos_cliente.push(nuevo_cliente);
// funcion donde busco el id del cliente y asi mostrarlo en la consola usando find
function buscar_id (usuario) {
    return usuario.id == id
}

let busqueda = datos_cliente.find(buscar_id);
console.log("Bienvenido/a: " , busqueda); 


// array con objetos de servicios y precios
let servicios = [
    {servicio:"corte de pelo",precio:1000},
    {servicio:"corte mas barba",precio:1200},
    {servicio:"corte mas color",precio:1800},
]
// funcion que se le hace un descuento del 10% al objeto dentro del array
function descuento(servicio) {
    let descuento_final = servicio.precio*0.1;
    return {
        servicio: servicio.servicio ,
        precio: servicio.precio-descuento_final
    }
}
console.log("Precios y servicios de los clientes por primera vez" , servicios);
//hago un map donde voy a mostrar los nuevos precios con el descuento obtenido
let precio_con_desc = servicios.map(descuento);

console.log("Precios y servicios de los clientes habituales" , precio_con_desc);

let decision_final = prompt("Elige el servicio que desee 1,2,3");

// Condicianales para saber si el cliente merece el descuento o no
if ((decision_final == 1) && (id > 100000)) {
    alert("Ya que sos cliente te hicimos un descuento de 10% en la consola te mostramos el precio final");
}
else if ((decision_final == 1) && (id < 100000)) {
    alert("Es tu primera vez con barberia el patron en la consola te dejamos el precio sin descuento");
}
else if ((decision_final == 2) && (id > 100000)) {
    alert("Ya que sos cliente te hicimos un descuento de 10% en la consola te mostramos el precio final");
}
else if ((decision_final == 2) && (id < 100000)) {
    alert("Es tu primera vez con barberia el patron en la consola te dejamos el precio sin descuento");   
}
else if ((decision_final == 3) && (id > 100000)) {
    alert("Ya que sos cliente te hicimos un descuento de 10% en la consola te mostramos el precio final");
}
else if ((decision_final == 3) && (id < 100000)) {
    alert("Es tu primera vez con barberia el patron en la consola te dejamos el precio sin descuento"); 
}
else {
    alert("Tus datos son incorrectos");
    
}

let pregunta = prompt("¿Necesitas algo mas? si o no");

while (pregunta != "no") {
    prompt("Que necesitas");
    pregunta = prompt("¿Algo mas?")
}





































