const sleep = ms => new Promise(r => setTimeout(r, ms));

// const jsonData = []
// d3.json("http://127.0.0.1:5000").then(async data => {
//     console.log("read samples");
//     var mydata = JSON.parse(data)
//     // console.log(mydata)
//     // 
//     // list of varieties
//     var varietyList = [];
//     for (var i = 0; i < mydata.length; i++) {
//         varietyList.push(mydata[i].variety)
//     }
//     console.log(varietyList);

//     // list of provinces
//     var provinceList = [];
//     for (var i = 0; i < mydata.length; i++) {
//         provinceList.push(mydata[i].province)
//     }
//     // list of regions
//     var regionList = [];
//     for (var i = 0; i < mydata.length; i++) {
//         regionList.push(mydata[i].region_1)
//     }
//     // list of wineries
//     var wineryList = [];
//     for (var i = 0; i < mydata.length; i++) {
//         wineryList.push(mydata[i].winery)
//     }
//     // for coordinates

//     var countryProv = wineryList.map(function (e, i,) {
//         return [e, regionList[i]];
//     }).map(([winery, region]) => `${winery}, ${region}`)

//     var countryProvSet = new Set(countryProv)
//     console.log(countryProvSet);
//     countryProv = [...countryProvSet]
//     console.log(countryProv);

    // for (let i = 0; i < countryProv.length; i++) {
    //     var country = countryProv[i]
    //     var address = country
    //     console.log(address)
    //     var geocoder = new google.maps.Geocoder();
    //     try {
    //         await sleep(3000);
    //     var { results } = await geocoder.geocode({ address: address })

    //     jsonData.push({
    //         address: address,
    //         longitude: results[0].geometry.location.lng(),
    //         latitute: results[0].geometry.location.lat(),
    //     })

    // } catch (e) {console.log(e)}


    // console.log(jsonData)
    // var json = JSON.stringify(jsonData);
    // var blob = new Blob([json], { type: "application/json" });
    // var url = URL.createObjectURL(blob);

    //   var a = document.createElement('a');
    //   a.download    = "backup.json";
    //   a.href        = url;
    //   a.textContent = "coords.json";
    //   a.click()

    d3.json("http://127.0.0.1:5000/").then(async data => {
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
            winery.push(`${key}`)}
            console.log(winery)
        for (const [key, value] of Object.entries(coorddata[0].longitude)) {
            lngs.push(`${value}`);}
        for (const [key, value] of Object.entries(coorddata[0].points)) {
            avgPoints.push(`${value}`);}
        for (const [key, value] of Object.entries(coorddata[0].price)) {
            avgPrice.push(`${value}`);}
        
        for (var i = 0; i < 333; i++) {
    
        var marker = L.marker([lats[i], lngs[i]]).bindPopup("<h1>" + winery[i].name + "</h1>").openPopup();
       
        markers.push(marker);
        };
        var newlayerGroup = L.layerGroup(markers)
        newlayerGroup.addTo(myMap)
            
        })
// merge collection in pandas, export as json to new api page, use above code


