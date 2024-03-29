var ctx = document.getElementById('myChart1');

d3.csv('UsoAutos.csv')
.then( (datos) => {
    
    console.log(datos)

    let datosuso = datos.map( function(elemento, indice){
        console.log(indice, elemento)
        return elemento.Uso
    } )

    let datosmenciones = datos.map(
        function (elemento, indice) {
        console.log(indice, elemento)
        return elemento.Ofertas
    })

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datosuso,
            datasets: [{
                label: 'Ofertas',
                data: datosmenciones,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'                    
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                    

                ],
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
})
