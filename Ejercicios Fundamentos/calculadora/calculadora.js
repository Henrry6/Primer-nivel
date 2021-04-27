/*var nombre= document.getElementById("txtNumero").value;
var Edad= document.getElementById("txtEdad").value;
console.log(nombre);
console.log(Edad);

function saludar(){
    alert(document.getElementById("Hola txtNumero").value);   
}
function nombrar(){
    alert(document.getElementById("txtEdad").value);   
}
*/


/*
var restar= document.getElementById("txtNumero").value;
var dividir= document.getElementById("txtNumero").value;
var mutiplicar= document.getElementById("txtNumero").value;
alert(document.getElementById("numero1").value);*/




function sumar (){

    let suma;
    let numero1= document.getElementById("numero1").value;
    let numero2= document.getElementById("numero2").value;
    
    suma= parseInt(numero1)+ parseInt(numero2);

    alert(suma);
    
}


function restar (){

    let resta;
    let numero1= document.getElementById("numero1").value;
    let numero2= document.getElementById("numero2").value;
    
    resta=numero1-numero2;

    alert(resta);
}

function multiplicar (){

    let multiplica;
    let numero1= document.getElementById("numero1").value;
    let numero2= document.getElementById("numero2").value;
    
    multiplica=numero1*numero2;

    alert(multiplica);
}

function dividir (){
    let divide;
    let numero1= document.getElementById("numero1").value;
    let numero2= document.getElementById("numero2").value;
    divide=numero1/numero2;

    alert (divide);
}
