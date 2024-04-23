let names = ["Tom", "Lily", "Jose", "Sarah"];
let height = [65, 60, 72, 68];

let $ = function (id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function () {
    $("show_results").addEventListener("click", showResults);
    $("add").addEventListener("click", addHeight);
    $("display_height").addEventListener("click", displayHeight);
    
});

function showResults() {
    var average = 0;
    var highHeight = 0.0;
    for(i=0;i<height.length;i++)
    {
        if(height[highHeight] < height[i])
        {
            highHeight = i;
        }
        average += parseFloat(height[i]);
    }
    average = average / height.length;

    $("result").innerHTML = "<h2>Results</h2><p>Average Height = " + average + "</p>";
    $("result").innerHTML += "</p>Highest Height = " + names[highHeight] + " with a height of " + height[highHeight] + "</p>";
    
}

function addHeight() {
    var name = $("name").value;
    var newHeight = $("height").value;
    if(name == "" || newHeight < 0 || newHeight > 100)
    {
        alert("You must enter a name and a valid height");
    }
    else{
        names.push(name);
        height.push(newHeight);
    }
}

function displayHeight() {
    var row = "<h2>Height</h2>";
    for(i=0;i<height.length;i++){
        row += "<tr><td>" + names[i] + "</td><td>" + height[i] + "</td></tr>";
    }
    $("height_table").innerHTML = row;
}
