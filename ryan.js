//Display the information based on which wine is selected
function second_chart(sample) {
    //read the flask 
    d3.json(`http://127.0.0.1:5000/select/${sample}`).then(data => {
        console.log('top data');
        console.log(data)
        // filter the data by variety
        let results = data
        console.log(results)
        //get the top 3 results
        let top_results = results.slice(0, 3).reverse();
        console.log(top_results)
        let length = top_results.length
        console.log(length)



        //display the top option
        if (length > 1) {
            if (length > 1) {
                let displayinfo = d3.select('#sample-metadata2');
                displayinfo.html('');
                Object.entries(top_results[0]).forEach(k => {
                    console.log(k)
                    // displayinfo.append('panel-body').text(k[0] + ':' + k[1]).append('br');
                    displayinfo.append('panel-body').text(k[0].toUpperCase() + ': ' + k[1]).append('br');
                });
                //display the second top option
                let displayinfo2 = d3.select('#sample-metadata3');
                displayinfo2.html('');
                Object.entries(top_results[1]).forEach(k2 => {
                    console.log(k2)
                    displayinfo2.append('panel-body').text(k2[0].toUpperCase() + ':' + k2[1]).append('br');
                });
            } else {
                displayinfo2.append('panel-body').text(k2[0].toUpperCase() + ': ' + k2[1]).append('br');
            }
        } else {
            let displayinfo = d3.select('#sample-metadata2');
            displayinfo.html('');
            Object.entries(top_results[0]).forEach(k => {
                console.log(k)
                // displayinfo.append('panel-body').text(k[0] + ':' + k[1]).append('br');
                displayinfo.append('panel-body').text(k[0].toUpperCase() + ': ' + k[1]).append('br');
            });
            let displayinfo2 = d3.select('#sample-metadata3');
            displayinfo2.html('');
        };
        //Display the top 10 options
        let title = data.filter(meta => meta.variety === sample);
        console.log(title)
        var top_ten = []
        for (var i = 0; i < title.length; i++) {
            title[i].title
            top_ten.push(title[i].title);
        }
        console.log(top_ten);
        number = [1,2,3,4,5,6,7,8,9,10]
        let top_ten2 = top_ten.slice(0, 10).reverse();
        let displayinfo3 = d3.select('#sample-metadata4');
        displayinfo3.html('')
        console.log(top_ten2)
        Object.entries(top_ten2).forEach(([key, value]) => {
            displayinfo3.append("panel-body").text(number[key] + `. `+ `${value}`).append('br');
            
            // let results2 = data.filter(varty => varty.variety === sample);
            // console.log(results2)
            // //get the top 3 results
            // let top_results2 = results2.title.slice(0, 10).reverse();
            // console.log(top_results2)
            // // let length = top_results.length
            // // console.log(length)
            // let displayinfo = d3.select('#sample-metadata4');
            // displayinfo.html('');
            // Object.entries(top_results2).forEach(([key, value]) => {
            //     displayinfo3.append("panel-body").text(`${value}`);
        });
        console.log(top_ten2)
    });
}


// function init() {
//     d3.json("http://127.0.0.1:5000").then(data => {
//         console.log('sample data');
//         var data = JSON.parse(data)
//         console.log(data)
//         var wineVariety = data[0];
//         console.log(wineVariety);

//         // Create a list for wine variety options
//         var varietyList = [];

//         // Loop through data[0] to data.length
//         // Pull all wine variety options
//         for (var i = 0; i < data.length; i++) {
//             data[i].variety
//             varietyList.push(data[i].variety)
//         }
//         console.log(varietyList);

//         // Remove Duplicates
//         uniqueVarietyList = Array.from(new Set(varietyList));
//         // Sort: Alphabetical Order
//         uniqueVarietyList.sort();
//         //Print Results
//         console.log(uniqueVarietyList);


//         // Drop down menu creation
//         let dropdownMenu = d3.select("#selDataset");
//         // uniqueVarietyList.forEach((uniqueVarietyList) => {
//         //     dropdownMenu.append('option').text(uniqueVarietyList);
//         // });

//         // Start at wine option 0
//         var result = uniqueVarietyList[0];

//         // for (let i = 0; i<data.length; i++){
//         //     console.log(data.country);

//         //     var result = data[0].variety;
//         //     winelist(wineVariety);
//         // };
//     });
// }

// // Initialize the code
// init();

