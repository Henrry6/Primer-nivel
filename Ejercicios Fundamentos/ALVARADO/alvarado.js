var valor = [];

function mostrar(){
    let valores; 
    valor.splice(0,valor.length);
    for(let i=0 ; i <=1 ;i++){
       valores = Math.floor(Math.random() * (20 - 1) + 1);
        valor.push(valores);
    }
}
function graficar(dato){

    if(dato==''){
        mostrar();
    }

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels:  ['Red'],
        datasets: [{
            label: '# of Votes',
            data: valor,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
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

