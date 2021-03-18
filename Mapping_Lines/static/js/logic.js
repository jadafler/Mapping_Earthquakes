// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline
let line = [
  [37.6213, -122.3790],
  [30.1900, -97.6687],
  [36.1317, -86.6688],
  [43.6771, -79.6248],
  [40.6413, -73.7781],
];

// Create a polyline using the line coordiantes and make the line red
L.polyline(line, {
  color: "blue",
  opacity: '0.5',
  dashArray: '4',
}).addTo(map);

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map
streets.addTo(map);