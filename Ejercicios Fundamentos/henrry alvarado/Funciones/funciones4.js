function sumar (num1,num2){

    let suma;
    suma= parseInt(num1)+ parseInt(num2);

    return suma;
}

function restar (num1,num2){

    let resta;
    resta=num1-num2;

    return resta;
}

function multiplicar (num1,num2){

    let multiplica;
    multiplica=num1*num2;

    return multiplica;
}

function dividir (num1,num2){
    let divide;
    divide=num1/num2;

    return divide;
}



do {
var operacion=prompt("Escoja la operaciòn")
var numero1 = prompt("Ingrese primer numero");
var numero2 = prompt("Ingrese segundo numero")
var resultado;
var de_regreso;

if(operacion=="+"){
    resultado= sumar( numero1,numero2);
}
if(operacion=="-"){
    resultado= restar( numero1,numero2); 
}
if(operacion=="*"){
    resultado= multiplicar( numero1,numero2);    
}
if(operacion=="/"){
    resultado= dividir ( numero1,numero2);
}
     alert(resultado);
     de_regreso=prompt("Desea realizar otra operacion?");
}


while(de_regreso=="s"){

    /* var operacion=prompt("Escoja la operaciòn")
     var numero1 = prompt("Ingrese primer numero");
     var numero2 = prompt("Ingrese segundo numero");
     var resultado;

    if(operacion=="+"){
        resultado= sumar( numero1,numero2);
    }
    if(operacion=="-"){
        resultado= restar( numero1,numero2); 
    }
    if(operacion=="*"){
        resultado= multiplicar( numero1,numero2);    
    }
    if(operacion=="/"){
        resultado= dividir ( numero1,numero2);
    }
    alert(resultado);
    de_regreso=prompt("Desea realizar otra operacion?");*/

}
de_regreso=="n";
alert("bye");


//muy buena clase//