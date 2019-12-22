// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node, then get the value property of the input value
  var inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(event => event.datetime === inputValue);

  console.log(filteredData);

// Create a table to store filtered data and print table to web page
  
    filteredData.forEach((date) => {
    var row = tbody.append("tr");
    Object.entries(date).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});


// button.on("click", function() {

//     // Select the input element and get the raw HTML node, then get the value property of the input value
//     var inputValue = d3.select("#city").property("value");
  
//     console.log(inputValue);
//     console.log(tableData);
  
//     var filteredData = tableData.filter(event => event.city === inputValue);
  
//     console.log(filteredData);
  
//   // Create a table to store filtered data and print table to web page
    
//       filteredData.forEach((cities) => {
//       var row = tbody.append("tr");
//       Object.entries(cities).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });
//   });