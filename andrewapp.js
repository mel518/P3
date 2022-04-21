
function buildMetadata(sample) {

  // Pull samples.json then call it (data)
  d3.json(`http://127.0.0.1:5000/select/${sample}`).then(data => {
    console.log("read samples");


    // Filter the data for the object with the desired sample number
    // Go to metadata / filter the following, if id == sample
    var resultArray = data
    // console.log(resultArray[1].country)
    var resultCountry = []
    for (var i = 0; i < resultArray.length; i++) {
      resultArray[i].country
      resultCountry.push(resultArray[i].country);
    }
    console.log(resultCountry);
    uniqueCountry = Array.from(new Set(resultCountry));
    // Sort: Alphabetical Order
    uniqueCountry.sort();
    //Print Results
    console.log(uniqueCountry);

    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // Tags for each key-value in the metadata.
    Object.entries(uniqueCountry).forEach(([key, value]) => {
      PANEL.append("h6").text(`${value}`);
    });
    // Object.entries(uniqueCountry).forEach(([key, value]) => {
    //   PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    // });
  });
}



//-------------------------



function init() {
  d3.json("http://127.0.0.1:5000/variety-list").then(data => {
    console.log("read samples");
    console.log("data", data)

    //     // Create a list for wine variety options
    //     var varietyList = [];

    //     // Loop through data[0] to data.length
    //     // Pull all wine variety options
    //     for(var i = 0; i<data.length; i++) {
    //         data[i].variety
    //         varietyList.push(data[i].variety)
    // }
    //     console.log(varietyList);

    //     // Remove Duplicates
    //     uniqueVarietyList = Array.from(new Set(varietyList));
    //     // Sort: Alphabetical Order
    //     uniqueVarietyList.sort();
    //     //Print Results
    //     console.log(uniqueVarietyList);


    // Drop down menu creation
    let dropdownMenu = d3.select("#selDataset");
    data.forEach((uniqueVarietyList) => {
      dropdownMenu.append('option').text(uniqueVarietyList)
      // dropdownMenu.append('option').text(uniqueVarietyList).property("value",UniqueVarietyList);
    })
    //this is works because of Closure and Scope (Unique)
    // Start at wine option 0
    var result = data[0];

    // // for (let i = 0; i<data.length; i++){
    // // console.log(data.country);
    buildMetadata(result)
    //   var result = data[0].variety;
    // winelist(wineVariety);
  });
}

// New Option for Drop Down, re-load all info


// Initialize the code
init();


//

