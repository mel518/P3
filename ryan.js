//Display the information based on which wine is selected
function second_chart(sample) {
    //read the flask 
    d3.json("http://127.0.0.1:5000").then(data => {
        console.log('top data');
        var data = JSON.parse(data)
        console.log(data)
        // filter the data by variety
        let results = data.filter(varty => varty.variety === sample);
        console.log(results)
        //get the top 3 results
        let top_results = results.slice(0,3).reverse();
        console.log(top_results)
        let length = top_results.length
        console.log(length)
       
        //display the top option
        if (length > 2){
            let displayinfo = d3.select('#sample-metadata');
            displayinfo.html('');
            Object.entries(top_results[0]).forEach(k =>{
                console.log(k)
                displayinfo.append('panel-body').text(k[0]+':' + k[1]).append('br');
            });
        //display the second top option
            let displayinfo2 = d3.select('#sample-metadata2');
            displayinfo2.html('');
            Object.entries(top_results[1]).forEach(k2 =>{
                console.log(k2)
                displayinfo2.append('panel-body2').text(k2[0]+':' + k2[1]).append('br');
            });
        }else{
            let displayinfo = d3.select('#sample-metadata2');
            displayinfo.html('');
            Object.entries(top_results[0]).forEach(k =>{
                console.log(k)
                displayinfo.append('panel-body').text(k[0]+':' + k[1]).append('br');
            });
            let displayinfo2 = d3.select('#sample-metadata2');
            displayinfo2.html('');        
        };
    });
}


function init() {
    d3.json("http://127.0.0.1:5000").then(data => {
        console.log('sample data');
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
        });

        // Start at wine option 0
        var result = uniqueVarietyList[0];

        // for (let i = 0; i<data.length; i++){
        //     console.log(data.country);

        //     var result = data[0].variety;
        //     winelist(wineVariety);
        // };
    });
}

// Initialize the code
init();



// New Option for Drop Down, re-load all info
function optionChanged(value) {
    console.log(value);
    second_chart(value)
}