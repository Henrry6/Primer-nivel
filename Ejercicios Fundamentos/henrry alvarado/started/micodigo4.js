

var nombre, notaParcial1, notaParcial2, notaFinal;

nombre=prompt("ingrese su nombre");
notaParcial1=prompt("ingrese su primer nota");

if(notaParcial1<0||notaParcial1>50){
    alert("ingrese nuevamente un valor no <0;>50");
    notaParcial1=prompt("ingrese su primer nota"); 
}
else if(notaParcial1<0||notaParcial1>50){ 
    alert("ingrese nuevamente un valor");
    notaParcial1=prompt("ingrese su primer nota"); 
}   


notaParcial2=prompt("ingrese su segunda nota");

if(notaParcial2<0||notaParcial2>50){
    alert("ingrese nuevamente un valor no <0;>50");
    notaParcial2=prompt("ingrese su segunda nota");
}
else if(notaParcial2<0||notaParcial2>50){
    alert("ingrese nuevamente un valor");
    notaParcial2=prompt("ingrese su segunda nota");
}


notaFinal=(parseInt(notaParcial1) + parseInt(notaParcial2));
alert("notaFinal:"+notaFinal);
alert("su nombre es:"+nombre);
if(notaFinal>=70){
    alert("Aprobado");
}
else if(notaFinal<70){
    alert("Reprobado"); 
}

