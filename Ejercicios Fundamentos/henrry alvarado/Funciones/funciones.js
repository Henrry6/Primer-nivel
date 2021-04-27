
function saludar(nombre) {
    let mensaje="Hola cómo estás," + nombre;
    return mensaje;

}

/*var nombre;
nombre=prompt("INGRESE UN NOMBRE");
console.log(saludar(nombre));

console.log(saludar(prompt("INGRESE UN NOMBRE")));*/

var saludo= saludar(prompt("Your name"));
alert(saludo);
