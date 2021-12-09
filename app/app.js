const samGaryCoordinates = [39.758972167969, -104.90101623535]
const map = L.map("map").setView(samGaryCoordinates, 17);

L.marker(platteCoordinates)
    .bindPopup("Sam Gary Library")
    .openPopup()
    .addTo(map);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
}).addTo(map);
