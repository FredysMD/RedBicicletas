
var map = L.map('main_map').setView([10.5878006,-74.1842025],15); //localización: Aracataca, Colombia

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


$.ajax({
    dataType:"json",
    url:"api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bicicleta){
            L.marker(bicicleta.ubicacion,{title: bicicleta.id}).addTo(map)
        });
    }
})