/* funcionalidades da biblioteca Leaflet, que gera um mapa interativo */

const options = {
    dragging:  false,
    touchZoom: false,
    doubleClockZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

// create map
const map = L.map('mapid', options).setView([-27.2029414,-49.6352799], 16);

// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


// create and add marker
L.marker([-27.2029414,-49.6352799], { icon }).addTo(map);

/* image gallery */
function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach( removeActiveClass );

    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    // selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details img");

    // atualizar o container de imagem
    imageContainer.src = image.src;

    // adicionar classe .active para o botão clicado
    button.classList.add("active");
}