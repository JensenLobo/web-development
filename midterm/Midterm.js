var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var duration = [5,6,7,8,4,5,5];


var $ = function(id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function() {
    //event handlers
    $("updates").addEventListener("click", updateSleep);
    $("average_sleep").addEventListener("click", showAverageSleep);
    $("track_Sleep").addEventListener("hover", displaySleepDuration);
});

function updateSleep(){
    var sleep = $("sleephrs").value;
    var day = $("days").value;

    if(sleep < 0){
        alert("Enter a valid number");
        $("sleephrs").value = "";
    }
    else{
        duration.push(sleep);
        alert("Your updated sleep duration is " + sleep + " hrs on " + day);
    }

}

function showAverageSleep(){
    var average = 0;
    var newstyle = document.createElement("showSleep");

    for(i=0; i < duration.length; i++){
        average += duration[i];
    }
    
    average = parseInt(average / duration.length);

    $("showSleep").value = average;
    newstyle.style.borderColor = "#FF0000";
    newstyle.style.color = "008000";
}

function displaySleepDuration(){    
    var row = "<p>Day</p>";
    for(i=0;i<duration.length;i++){
        if(duration[i] < 7){
            row += "<tr><td>" + days[i] + "</td><td>" + duration[i] + "</td></tr>";
        }
    }
    $("result_here").value = "Hey! you slept less than 7 house on the following days";
    $("sleep_table").innerHTML = row;
}
