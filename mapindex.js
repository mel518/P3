
d3.json("https://egwhitewineapp.herokuapp.com").then(async data => {
    console.log("read samples");
    var coorddata = JSON.parse(data)
    console.log(coorddata);

    var myMap = L.map("map", {
        center: [39.0997, -94.5786],
        zoom: 4.4
    });

    // Adding a tile layer (the background map image) to our map:
    // We use the addTo() method to add objects to our map.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
    var markers = []
    var lats = []
    var lngs = []
    var winery = []
    var avgPoints = []
    var avgPrice = []

    for (const [key, value] of Object.entries(coorddata[0].latitute)) {
        lats.push(`${value}`);
        winery.push(`${key}`);

    }
    console.log(winery)
    for (const [key, value] of Object.entries(coorddata[0].longitude)) {
        lngs.push(`${value}`);
    }
    // somehow put this line in the L.marker arguments to use coordata[0] instead of lats and lngs
    // refer to all the values of the dictionary instead of a separate list
    for (const [key, value] of Object.entries(coorddata[0].points)) {
        avgPoints.push(`${value}`);
    }
    for (const [key, value] of Object.entries(coorddata[0].price)) {
        avgPrice.push(`${value}`);
    }
    var myIcon = L.icon({
        iconUrl: '64x64.png',
        iconSize: [20, 20],
       // iconAnchor: [22, 94],
        //popupAnchor: [-3, -76],
        
    });
    for (var i = 0; i < 333; i++) {
        var marker = L.marker([lats[i], lngs[i]], {icon: myIcon}).bindPopup("<h4>Winery: " + winery[i] + 
        "</h4><hr><p>Average Price per Bottle: $" + avgPrice[i] + 
        "</p><hr><p>Average Points Rating: " + avgPoints[i]).openPopup();
        markers.push(marker);
    }

    // for (const [key, value] of Object.entries(coorddata[0].longitude)) {
    //     lngs.push(`${value}`);}
    for (const [key, value] of Object.entries(coorddata[0].points)) {
        avgPoints.push(`${value}`);
    }
    for (const [key, value] of Object.entries(coorddata[0].price)) {
        avgPrice.push(`${value}`);
    }

    for (var i = 0; i < 333; i++) {

        // var marker = L.marker([lats[i], lngs[i]]).bindPopup("<h1>" + winery[i].name + "</h1>").openPopup();

        markers.push(marker);
    };
    var newlayerGroup = L.layerGroup(markers)
    newlayerGroup.addTo(myMap)

})
// merge collection in pandas, export as json to new api page, use above code


