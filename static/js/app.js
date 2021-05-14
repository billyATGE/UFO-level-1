var tableData = data;

// HTML elements/nodes
var filterBtn = d3.select('#filter-btn');


// Call the create table function to build the table and insert data into the table.
createTable(tableData);



filterBtn.on('click', () => {
    var inputElement1 = d3.select("#datetime");
    var inputValue = inputElement1.property("value");
    var filteredData = tableData.filter(function(event){
        if(inputValue !== null && inputValue !== ''){
            return event.datetime === inputValue;};
          return event.datetime;
        });
    console.log(filteredData)
    createTable(filteredData);
});

