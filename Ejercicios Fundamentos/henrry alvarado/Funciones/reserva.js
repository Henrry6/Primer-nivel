// Henrry Alvarado --- Sebastian Manobanda

function reservarAsiento(num1){
    asientosTotales[num1-1]="Asiento Reservado"
    
    while(asientosTotales="Asiento Reservado"){
        asientosTotales[num1-1]="Asiento Reservado"
        return(asientosTotales);
    }
}





function cancelarAsiento(num2){
    asientosTotales[num2-1]=num2
    return(asientosTotales);

}

function verAsientosDisponibles(){
    console.log(asientosTotales);
}

function verAsientosReservados(){
    console.log(asientosTotales);
}



var asientosTotales=[1,2,3,4,5,6,7,8,9,10];
var numerosdeAsientos =prompt("Cuantos asientos desea reservar");
var contador;

for( var i=0; i<=numerosdeAsientos-1;i++){
    contador=prompt("Escoja del 1 al 10");
    alert(reservarAsiento(contador));  
}

numerosdeAsientos=prompt("Desea ver asientos disponibles?");
if(numerosdeAsientos=="si"){
    console.log(verAsientosDisponibles());
  
}
numerosdeAsientos=prompt("Dese cancelar un asiento : si o no ?")
if(numerosdeAsientos=="si"){
    numerosdeAsientos=prompt("Cuantos asientos va a cancelar?")
    for( var i=0; i<=numerosdeAsientos-1;i++){
        contador=prompt("Escoja del 1 al 10");
        
        alert(cancelarAsiento(contador)); 
    }
}

numerosdeAsientos=prompt("Desea ver asientos Reservados?");
if(numerosdeAsientos=="si"){
    console.log(verAsientosReservados());
}



alert("Gracias por preferir nuestra aerolinea");
