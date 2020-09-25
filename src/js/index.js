// var mymap = L.map('map').setView([9.00113, 47.51811], 13);

// var wmsLayer = L.tileLayer.wms('https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?', {
// layers: 'Nutzungsflaechen'
// }).addTo(map);
// var wmsLayer = L.tileLayer.wms('', wmsOptions).addTo(map);

var mymap = L.map('map').setView([47.550, 9.060], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
L.tileLayer.wms('https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?', {
    layers: 'Nutzungsflaechen',
    format: 'image/png',
    transparent: true
}).addTo(mymap);