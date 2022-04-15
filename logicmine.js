// 500 wines in US only for map

function init() {
    d3.json("http://127.0.0.1:5000").then(data => {
        console.log("read samples");
        var mydata = JSON.parse(data)
        console.log(mydata)
        // 
        // list of varieties
        var varietyList = [];
        for(var i = 0; i<mydata.length; i++) {
            mydata[i].variety
            varietyList.push(mydata[i].variety)}
        console.log(varietyList);
      
        // list of provinces
        var provinceList = [];
        for(var i = 0; i<mydata.length; i++) {
            mydata[i].province
            provinceList.push(mydata[i].province)}
        // list of regions
        var regionList = [];
        for(var i = 0; i<mydata.length; i++) {
            mydata[i].region_1
            regionList.push(mydata[i].region_1)}
        // for coordinates

        var countryProv = regionList.map(function(e, i,) {
            return [e, provinceList[i]];
          });
          console.log(countryProv);

        // list of price

        // list of points
    });
}

init();
// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 3
  });
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);