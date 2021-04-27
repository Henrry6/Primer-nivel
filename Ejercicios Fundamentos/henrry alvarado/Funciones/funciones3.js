function sumar(num1,num2){
    let suma=0;
  
    for( var i=num1; i <= num2;i++){

     
        suma= i+ suma;
    }   

   return suma;
 }

var sumatotal = sumar(1,10);
console.log(sumatotal);