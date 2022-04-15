function init() {
    d3.json("http://127.0.0.1:5000").then(data => {
        console.log("read samples");
        var mydata = JSON.parse(data)
        console.log(mydata)
        // list of varieties
        var varietyList = [];
        for(var i = 0; i<mydata.length; i++) {
            mydata[i].variety
            varietyList.push(mydata[i].variety)
    }
        console.log(varietyList);
        // list of countries

        // list of provinces

        // list of price

        // list of points
    });
}
// filter, when data.filter(x => x.price == null) = blah

init();

// using select to pull a select amount of elements from the db
// function init() {
//     d3.json("http://127.0.0.1:5000/select/US").then(data => {
//         console.log("read samples");
//         console.log(data)
//     });
// }


function countries(data) {
    for (let i = 0; i<data.length; i++) {
    console.log(data.country);
    }}



  




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