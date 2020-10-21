/* funcionalidades da biblioteca Leaflet, que gera um mapa interativo */

// create map
const map = L.map('mapid').setView([-27.2029414,-49.6352799], 15);

// create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

// create add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
});

// add photo field
function addPhotoField(){
    // get photo container #images
    const container = document.querySelector('#images');

    // get container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // clone last uploaded image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // if input is empty
    const input = newFieldContainer.children[0];
    if(input.value == ""){
        return
    }

    // clean the field before add image container
    input.value = '';

    // add clone to images container
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length < 2){
        // clear field value
        span.parentNode.children[0].value = '';
        return
    }

    // delete field
    span.parentNode.remove();
}

// select yes or no
function toggleSelect(event){
    // remove active class from buttons
    document.querySelectorAll('.button-select button').forEach( (button)=> {
        button.classList.remove('active');
    });

    // put active class
    const button = event.currentTarget;
    button.classList.add('active');

    // updating input hidden
    const input = document.querySelector('[name=open_on_weekends]');
    input.value = button.dataset.value;
}