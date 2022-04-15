//function winelist(sample) {
    //     d3.json("winemag.json").then((data) => {
    //         var samples = data.variety;
    
    //         // Filter the data
    //         var resultArray = data.filter( x => x.variety == sample);
    //         var result = resultArray[0];
    //         console.log(result);
    
    //         // var idLoop = result.variety;
    //         // var ids = []
    //         // for(var i = 0; i<10;i++) {
    //         //     idLoop[i]
    //         //     ids.push(idLoop[i])
    //         // }
    //         // console.log(ids)
    //         // console.log()
    
    //     })
    // }
    
    // function variety() {
    //     d3.json
    // }
    
    // TOP RATED WINE
    //function buildMetadata(sample) {
        
        // Pull samples.json then call it (data)
        //
    
    
    //-------------------------
    
    
    
    function init() {
        //-----------------------------------------------------\\
        //--------------- PULL FLASK HEREEE -------------------\\
        //-----------------------------------------------------\\
        d3.json("http://127.0.0.1:5000").then(data => {
            console.log("read samples");
            console.log(data);
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
    
            // // for (let i = 0; i<data.length; i++){
            // // console.log(data.country);
    
        //   var result = data[0].variety;
        // winelist(wineVariety);
        });
    }
    
    // New Option for Drop Down, re-load all info
    // function optionChanged(value) {
    //     console.log(value);
    //     winelist(value)
    // }
    
    // Initialize the code
    init();
    