var numero;
var suma=0;

numero=prompt("Ingrese en numero");
numero=parseInt(numero);
while(numero>0) {
    suma= suma + numero;
    //suma += numero//
    numero=parseInt(prompt("Ingrese otro numero"));
}
alert(suma);
