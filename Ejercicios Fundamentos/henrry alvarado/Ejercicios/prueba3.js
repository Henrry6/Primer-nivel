var numeroMaximo=prompt("Ingrese un numero maximo");
numeroMaximo=parseInt(numeroMaximo);
var numeroMinimo=prompt("Ingrese un numero minimo");
numeroMinimo=parseInt(numeroMinimo);
var numero=parseInt(prompt("Ingrese un numero"));
while(numero>numeroMinimo && numero<numeroMaximo) {
    numero=parseInt(prompt("Ingrese un numero"));
}