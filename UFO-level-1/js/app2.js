var tableData = data;

// select button and form
var button = d3.select ("#filter-btn");
var form = d3.select ("#form"); 

// event handler
button.on ("click", runEnter);
form.on ("submit",runEnter);

// return all results into table to begin with
table = document.getElementById("ufo-table");
for(var i = 0; i < tableData.length; i++)
{
    var newRow = table.insertRow(table.length);
    j = 0;
    for(var data in tableData[i])
    {
        var cell = newRow.insertCell(j);
            cell.innerHTML = tableData[i][data];
            j++;
}}

function runEnter() {

    // select the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //reset table to blank
    table.innerHTML = "";
    
    for(var i = 0; i < tableData.length; i++)
    {
        var newRow = table.insertRow(table.length);
        j = 0;
        for(var data in tableData[i])
        {
        if (tableData[i].datetime == inputValue) {
            var cell = newRow.insertCell(j);
                cell.innerHTML = tableData[i][data];
                j++;
            }
    }}
};
