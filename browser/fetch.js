// fetch example from MDN
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// because fetch is a web api, this requires a browser runtime environment

// Mpls snow emergency tow dataset
var apiUrl = "https://opendata.arcgis.com/datasets/0bf74f21025c49b386e64376043053b2_0.geojson"

fetch(apiUrl)
    .then(response => response.json())
    .then(myJson => console.log(JSON.stringify(myJson)));

