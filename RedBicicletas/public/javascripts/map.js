var map = L.map('main_map').setView([10.5878006,-74.1842025],15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([10.584679,-74.1806405]).addTo(map)
L.marker([10.588167,-74.1716278]).addTo(map)
L.marker([10.5952489,-74.19438]).addTo(map)