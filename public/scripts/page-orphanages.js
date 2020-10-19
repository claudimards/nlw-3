/* funcionalidades da biblioteca Leaflet, que gera um mapa interativo */

// create map
const map = L.map('mapid').setView([-27.2029414,-49.6352799], 16);

// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>');

// create and add marker
L.marker([-27.2029414,-49.6352799], { icon }).addTo(map)
    .bindPopup(popup);