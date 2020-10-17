//Create Map
// View definition for geographic coordinates
const map = L.map("mapid").setView([-19.8744668, -43.9869251], 15);
// L.() referente => Leaflet | 13 (zoom do mapa)

// Create Tile Layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map); // tileLayer (Primeira camada que recebe mapa)

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>'
);

// Create and add marker
L.marker([-19.8744668, -43.9869251], {icon} )
  .addTo(map)
  .bindPopup(popup)
  
