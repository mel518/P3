function scatterpoints(sample){
  d3.json(`https://egwhitewineapp.herokuapp.com/select/${sample}`).then(data => {
        console.log('top data');
        console.log(data)
    
  
     var resultArray = data

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
        text: [winename],
        mode: 'markers',
        marker: {
        color: (winepoints),
        size: (15),
        colorscale: 'Fire'
        
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
          y: wineprice.length,
          type: 'histogram',
        marker: {
          color: '#C70039',
          line: {
            color:  "rgba(255, 100, 102, 1)",
            width: 1
          }
        },
        }
      ];
      let barLayout= {
        title: 'Histogram of Wine Rating',
        margin: {t:0},
        hovermode: "closest",
        xaxis: {title: 'Wine Ratings'},
        yaxis: {title:'# of wines'},
        margin: {t:30}
      };
      Plotly.newPlot('bar', data,barLayout);


  });
}
 

// New Option for Drop Down, re-load all info
function optionChanged(value) {
  console.log(value);
  buildMetadata(value);
  scatterpoints(value);
  second_chart(value);
}