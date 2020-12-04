var options = {
    maxZoom: 18,
    minZoom: 10
};

var mymap = L.map('map', options).setView([47.550, 9.060], 10);
let layers = new Array();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
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

layers.reverse();

layers.forEach(layer => {
    layer.addTo(mymap);
});

// layers.forEach(layer => {
//     layer.removeFrom(mymap);
// });

var cbs = Array.prototype.slice.call(document.getElementsByClassName("cbLegend"));
cbs.forEach(checkbox => {
    //onclick
    checkbox.addEventListener('click', showLayer);

});


//function
function showLayer(sender) {
    var id = sender.target.getAttribute("layer");
    if (sender.target.checked) {
        layers[id].addTo(mymap);
    } else {
        layers[id].removeFrom(mymap);
    }
}

//get element pos
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

document.getElementById("TGlions").onclick = function () {
    catDrop()
};

function catDrop() {
    var TGlions = document.getElementById("TGlions");
    var catgif = document.getElementById("cat");
    var catTopPos = catgif.style.top = (getOffset(TGlions).top) + "px";
    console.log("Top Pos: " + catTopPos);
    var catLeftPos = catgif.style.left = (getOffset(TGlions).left) + 170 + "px";
    console.log("LeftPos: " + catLeftPos);
    catgif.style.visibility = "visible";

}


// Make the DIV element draggable:
dragElement(document.getElementById("cat"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}