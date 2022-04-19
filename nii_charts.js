
function init() {

  d3.json("http://127.0.0.1:5000").then(data => {
    console.log('top data');
    var data = JSON.parse(data)
    console.log(data)

    
  var wineVariety = data[0];
  console.log(wineVariety);

  // Create a list for wine variety options
  var varietyList = [];

  // Loop through data[0] to data.length
  // Pull all wine variety options
  for(var i = 0; i<data.length; i++) {
      data[i].variety
      varietyList.push(data[i].variety)
}
  console.log(varietyList);

  // Remove Duplicates
  uniqueVarietyList = Array.from(new Set(varietyList));
  // Sort: Alphabetical Order
  uniqueVarietyList.sort();
  //Print Results
  console.log(uniqueVarietyList);


  // Drop down menu creation
  let dropdownMenu = d3.select("#selDataset");
  uniqueVarietyList.forEach((uniqueVarietyList) => {
      dropdownMenu.append('option').text(uniqueVarietyList);
  })

  // Start at wine option 0
  var result = uniqueVarietyList[0];

});
}

function scatterpoints(sample){
  d3.json("http://127.0.0.1:5000").then(data => {
        console.log('top data');
        var data = JSON.parse(data)
        console.log(data)
    
  
     var resultArray = data.filter(x => x.variety == sample);

      let winepoints= [];
      let wineprice= [];
      let winename= [];

      for(var i = 0; i<resultArray.length; i++) {
        resultArray[i].points
        winepoints.push(resultArray[i].points);
      }
      console.log(winepoints);

      for(var i = 0; i<resultArray.length; i++) {
        resultArray[i].price
        wineprice.push(resultArray[i].price);
      }

      for(var i = 0; i<resultArray.length; i++) {
        resultArray[i].price
        winename.push(resultArray[i].title);
      }
      
      console.log(winename);

      // var trace1 = {
      //   x: winepoints,
      //   y: wineprice,
      //   mode: 'scatter',
      //   type: 'scatter'
      // };
      // var data = [trace1];
      // Plotly.newPlot('bubble', data);

      let trace2 = {
        x: (winepoints),
        y: (wineprice),
        //text: (otu_labelss),
        mode: 'markers',
        marker: {
        color: (winepoints),
        // size: (5),
        colorscale: 'Fire',
        text: [winename]
      }
    };
    
    let bubbleLayout= {
        title: 'Variety Price by Ratings',
        margin: {t:0},
        hovermode: "closest",
        xaxis: {title: 'Wine Ratings'},
        yaxis: {title:'Wine Prices'},
        margin: {t:30}
    };

    let data2=[trace2]
    Plotly.newPlot('bubble', data2, bubbleLayout);

      

      var data = [
        {
          x: winepoints,
          type: 'histogram',
        marker: {
          color: '#C70039',
        },
        }
      ];
      Plotly.newPlot('bar', data);


  });
}
 

// New Option for Drop Down, re-load all info
function optionChanged(value) {
  console.log(value);
  buildMetadata(value);
  scatterpoints(value);
  second_chart(value);
}

// Initialize the code
init();

