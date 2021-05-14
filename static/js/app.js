var tableData = data;

//Create table here
createTable(tableData);


//Filter on button click here
d3.select('#filter-btn').on('click', () => {
    var inputValue = d3.select("#datetime").property("value");
    var filteredData = tableData.filter(function(event){
        if(inputValue !== null && inputValue !== ''){
            return event.datetime === inputValue;};
          return event.datetime;
        });
    console.log(filteredData)
    //Use filtered Data to build new table
    createTable(filteredData);
});

