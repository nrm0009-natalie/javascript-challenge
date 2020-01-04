// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Create the default table with all the data
function buildTable() {
    // Set the filteredData to the tableData
    let filteredData = tableData;

    // Create a table and print table to web page
    filteredData.forEach((date) => {
    var row = tbody.append("tr");
    Object.entries(date).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    });
};

buildTable();

// creating function that will run when "filter button" is clicked
button.on("click", function(){
    // Create a variable that Selects the input element and gets the raw HTML node, then gets the value property of the input value
    var Datetime = d3.select("#datetime").property("value");
    var City = d3.select("#city").property("value");
    var State = d3.select("#state").property("value");
    var Country = d3.select("#country").property("value");
    var Shape = d3.select("#shape").property("value");

    // Use IF statement to determine which input value is being used in order to generate table based on the correct filterd data
    if(Datetime !== ""){
        filteredData = tableData.filter(event => event.datetime === Datetime);
        console.log(filteredData);
    }
    if(City !== ""){
        filteredData = tableData.filter(event => event.city === City);
        console.log(filteredData);
    }
    if(State !== ""){
        filteredData = tableData.filter(event => event.state === State);
        console.log(filteredData);
    }
    if(Country !== ""){
        filteredData = tableData.filter(event => event.country === Country);
        console.log(filteredData);
    }
    if(Shape !== ""){
        filteredData = tableData.filter(event => event.shape === Shape);
        console.log(filteredData);
    }

    // clear previous data from table
    d3.selectAll('tr').remove()

// Create a table and print table to web page
    filteredData.forEach((date) => {
    var row = tbody.append("tr");
    Object.entries(date).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    });
    
});