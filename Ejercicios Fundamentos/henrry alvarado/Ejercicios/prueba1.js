var numero1;
var numero2;
numero1=parseInt(prompt("Ingrese el primer numero"));
numero2=parseInt(prompt("Ingrese el segundo numero"));
while(numero1<numero2){
    alert("Intentelo de nuevo")
    numero1=parseInt(prompt("Ingrese el primer numero"));
}
alert(numero1);
alert(numero2);
