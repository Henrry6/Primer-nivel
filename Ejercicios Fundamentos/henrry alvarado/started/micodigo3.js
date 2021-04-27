var nombre;
var notaP1; 
var notaP2;
var asistenciaP1;
var asistenciaP2;
var suma;
var division;

nombre=prompt("Ingrese su nombre");

notaP1=prompt("Ingrese nota primer parcial");
notaP1=parseInt(notaP1);
notaP2=prompt("Ingrese nota segundo parcial");
notaP2=parseInt(notaP2);

asistenciaP1=prompt("Ingrese la asistencia 1er parcial");
asistenciaP1=parseInt(asistenciaP1);
asistenciaP2=prompt("Ingrese la asistencia 2do parcial");
asistenciaP2=parseInt(asistenciaP2);

alert("Su nombre es:"+nombre);

suma= notaP1 + notaP2;
alert("la nota final es:"+suma);

suma= asistenciaP1 + asistenciaP2;
division= suma / 2;
alert("nota final de asistencia:"+division);



if(suma<70) {
    alert("exonerado");
} 
else if(suma>=70&&suma<=89){
    alert("tiene examen");
}
else if (suma>=90&&suma<=100) {
    alert("reprobado");
}

