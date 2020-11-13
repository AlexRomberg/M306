// var mymap = L.map('map').setView([9.00113, 47.51811], 13);

// var wmsLayer = L.tileLayer.wms('https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?', {
// layers: 'Nutzungsflaechen'
// }).addTo(map);
// var wmsLayer = L.tileLayer.wms('', wmsOptions).addTo(map);

var mymap = L.map('map').setView([47.550, 9.060], 10);
let layers = new Array();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
layers.push(L.tileLayer.wms('https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?', {
    layers: 'nutzungsflaechen_flaechen_tg',
    format: 'image/png',
    transparent: true
}));
layers.push(L.tileLayer.wms('https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?', {
    layers: 'nutzungsflaechen_',
    format: 'image/png',
    transparent: true
}));
layers.push(L.tileLayer.wms('https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?', {
    layers: 'nutzungsflaechen_hauptkulturen',
    format: 'image/png',
    transparent: true
}));
layers.push(L.tileLayer.wms('https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?', {
    layers: 'nutzungsflaechen_hauptkulturen_textur',
    format: 'image/png',
    transparent: true
}));

layers.forEach(layer => {
    layer.addTo(mymap);
});

// layers.forEach(layer => {
//     layer.removeFrom(mymap);
// });

var cbs = document.getElementsByClassName("cbLegend");
console.log;
cbs.forEach(checkbox => {
    //onclick =>
    checkbox.attachEvent('onclick', showLayer());

});


//function
function showLayer(sender) {
    var id = sender.getAttribute("layer");
    if (sender.isChecked()) {
        layers[id].addTo(mymap);
    } else {
        layer[id].removeFrom(mymap);
    }
}