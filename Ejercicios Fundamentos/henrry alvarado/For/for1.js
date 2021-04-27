/*for(var i=1;i<=100;i++){
    console.log(i);
}

for(var i=100;i>=1;i-=1){
    console.log(i);
}

for(var i=2;i<=100;i+=2){
    console.log(i);
}

for(var i=1;i<=3;i++){

    for(var J=1;J<=2;J++){
        console.log(J);

    }
  console.log(J);
} */

var numero;
numero=parseInt(prompt("Ingrese un numero"));
var residuo;
var contador=0;
for( i=1 ; i<=numero;i++){
    residuo=numero%i;
    if(residuo==0){
        contador++;
    }
}
if(contador==2){
    alert("Es numero primo");
}else{
    alert("No es numero primo");
}