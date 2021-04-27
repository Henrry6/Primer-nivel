function mostrar(){
    aleatorio = Math.floor(Math.random() * (20 - 1) + 1);
        nuevoData.push(aleatorio);
        nuevoLabels.push(catalogoLabels[nuevoLabels.length]);
        nuevoBackgroundColor.push(catalogoBackgroundColor[nuevoBackgroundColor.length]);
        nuevoBorderColor.push(catalogoBorderColor[nuevoBorderColor.length]);
}



function agregar(){
    if(nuevoData.length<10){
        aleatorio = Math.floor(Math.random() * (20 - 1) + 1);
        nuevoData.push(aleatorio);
        nuevoLabels.push(catalogoLabels[nuevoLabels.length]);
        nuevoBackgroundColor.push(catalogoBackgroundColor[nuevoBackgroundColor.length]);
        nuevoBorderColor.push(catalogoBorderColor[nuevoBorderColor.length]);
    }else{
        alert("Limite maximo de graficos");
    }
}

function eliminar(){
    if(nuevoData.length>0){
        nuevoData.pop();
        nuevoLabels.pop();
        nuevoBackgroundColor.pop();
        nuevoBorderColor.pop();
    }else{
        alert("Limite minimo de graficos");
    }
}

function generarArrayAleatorio(){
    let aleatorio; 
    nuevoData.splice(0,nuevoData.length-1);
    for(let i=0 ; i < 6 ;i++){
        aleatorio = Math.floor(Math.random() * (20 - 1) + 1);
        nuevoData.push(aleatorio);
    }
}


function graficar(opcion){
    if(opcion=='+'){
        agregar();
    }
    if(opcion=='-'){
        eliminar();
    }
    if(opcion==''){
        generarArrayAleatorio();
    }
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nuevoLabels,
        datasets: [{
            label: '# of Votes',
            data: nuevoData,
            backgroundColor: nuevoBackgroundColor,
            borderColor: nuevoBorderColor,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

var catalogoLabels = ['Rojo', 
'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja','Negro','Cafe','Blanco','Plomo'];
var catalogoBackgroundColor = [ 
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(130, 70, 50, 1)',
    'rgba(255, 255, 255, 1)',
    'rgba(120, 120, 120, 1)'];

var catalogoBorderColor = [ 
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(0, 0, 0, 1)'];

var nuevoData = [];

var nuevoLabels = 
['Rojo', 
'Azul', 
'Amarillo', 
'Verde', 
'Morado', 
'Naranja'];

var nuevoBackgroundColor = [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 99, 132, 1)'];

var nuevoBorderColor = [
'rgba(0, 0, 0, 1)',
'rgba(0, 0, 0, 1)',
'rgba(0, 0, 0, 1)',
'rgba(0, 0, 0, 1)',
'rgba(0, 0, 0, 1)',
'rgba(0, 0, 0, 1)'];

generarArrayAleatorio();
