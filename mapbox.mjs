import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsaGR6YSIsImEiOiJja2dzeHJjbnMwZzE3MnJtNWV6cHVsam9sIn0.7oigwdpk6AYK5VqUZq3phg';
var map = new mapboxgl.Map(document.getElementById("map"), {
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-84.387, 33.749], // starting position [lng, lat]
zoom: 13,
//zoom: 9 // starting zoom
});

var marker = new mapboxgl.Marker()
.setLngLat([-84.387, 33.749])
.addTo(map);

var marker = new mapboxgl.Marker()
.setLngLat([-84.386, 33.749])
.addTo(map);

