function createTable(tableData){
  var tbody = d3.select(".table").select("tbody");
  tbody.html("");
  tableData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};


