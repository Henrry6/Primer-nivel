/*function sumar(num1,num2){
    let suma= num1+num2;
    return suma;
}

if( sumar(5,3)>4){
    alert(" la suma es mayor que 4")
}
else {
    alert("La suma es menor que 4");
}



for( var i=0; i < sumar(5,3); i++){

}*/

function ParImpar(num1){
    let mensaje;
    if( num1%2==0){
        mensaje= "ES NUMERO PAR";
    }
    else{
        mensaje= "ES NUMERO IMPAR";
    }
    return mensaje;
}

var numero = ParImpar(9);
alert(numero);












