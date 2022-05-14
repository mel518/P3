function second_chart(sample) {
    //read the flask
    d3.json(`https://egwhitewineapp.herokuapp.com/select/${sample}`).then(data => {
        console.log('top data');
        console.log(data)
        // filter the data by variety
        let results = data
        console.log(results)
        //get the top 3 results
        // let top_results = results.slice(0, 3).reverse();
        // console.log(top_results)
    //sort and filter to get the wines in descending order based on points
        let filterMap = {};
        results.forEach(function (item) {
            if (!filterMap[item.points] || filterMap[item.points].points < item.points){
                filterMap[item.points] = item;
            }
        })
        let meta = [];
        for (let points in filterMap) {
            meta.push(filterMap[points]);
        }
        meta.sort(function(a,b){
            return b.points - a.points;
        });
        console.log(meta);
        //find the length of selected wine choice
        let length = meta.length
        console.log(length)
        //display the top option
        if (length > 1) {
            let displayinfo = d3.select('#sample-metadata2');
            displayinfo.html('');
            Object.entries(meta[0]).forEach(k => {
                console.log(k)
                displayinfo.append('panel-body').text(k[0].toUpperCase() + ': ' + k[1]).append('br');
            });
            //display the second top option
            let displayinfo2 = d3.select('#sample-metadata3');
            displayinfo2.html('');
            Object.entries(meta[1]).forEach(k2 => {
                console.log(k2)
                displayinfo2.append('panel-body').text(k2[0].toUpperCase() + ':' + k2[1]).append('br');
            });
        } else {
            let displayinfo = d3.select('#sample-metadata2');
            displayinfo.html('');
            Object.entries(meta[0]).forEach(k => {
                console.log(k)
                displayinfo.append('panel-body').text(k[0].toUpperCase() + ': ' + k[1]).append('br');
            });
        }
        //Display the top 10 options
        console.log(meta)
        //return just the top options
        let test = [...meta].slice(0,10);
        console.log(test)
        //collect all the wine titles based on the selected wine choice
        let winename = [];
        for(var i = 0; i<test.length; i++) {
            test[i].price
            winename.push(test[i].title);
          }
        console.log(winename)
        //display the top 10 options
        number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let displayinfo3 = d3.select('#sample-metadata4');
        displayinfo3.html('')
        Object.entries(winename).forEach(([key, value]) => {
            console.log(value)
            displayinfo3.append('panel-body').text(number[key] + `.` + `${value}`).append('br');
        });
        console.log(meta)
    });
}