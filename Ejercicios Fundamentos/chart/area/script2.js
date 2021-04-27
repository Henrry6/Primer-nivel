let labels= ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja']
let newColor= [ 'Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja', 'negro', 'rosado','gris', 'turquesa' ]
let backgroundColor1=[
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
]
var backgroundColor2= [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)', 'rgba(0, 0, 0)','rgba(250, 114, 246)','rgba(177, 175, 175)','rgba(7, 218, 179)' 
]

var borde1=[
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)'
]
var borde2= [
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)'
]

nuevoData



function agregar(){
  if(nuevoData.length<10){
      aleatorio = Math.floor(Math.random() * (20 - 1) + 1);
      nuevoData.push(aleatorio);
  labels.push(newColor[labels.length]);
  backgroundColor1.push(backgroundColor2[backgroundColor1.length]);
  borde1.push(borde2[borde1.length]);

}else{
  alert("Limite maximo de graficos");
}

}

function eliminar(){
  if(nuevoData.length>0){
      nuevoData.pop();
      labels.pop();
      backgroundColor1.pop();
      borde1.pop();
  }else{
      alert("Limite minimo de graficos");
  }
}

function generarArrayAleatorio(){
  let aleatorio; 
  nuevoData.splice(0,nuevoData.length);
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

var ctx = document.getElementById('grafico').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bubble',
  data: {
      labels: labels,

      datasets: [{
          label: 'Numero de votos',
          data: nuevoData,
          backgroundColor: backgroundColor1,
          borderColor: borde1,
          borderWidth: 1
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
generarArrayAleatorio();