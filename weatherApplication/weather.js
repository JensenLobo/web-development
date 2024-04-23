"use strict";

$("button").click(function() {
    // Make ajax request to weather.php with the entered zip code
    $.ajax({
       type: "GET", //is used to specify the type of request
       data: {"zip": $("#zip").val()},
       dataType: "json",
       url: "https://api.openweathermap.org/data/2.5/weather"
      }).done(function(data) {  //if there is no issues then then success output will be displayed. the data is in this case numbers of the zip code         
          let html;
          if (data.success) {
             html = "<h3>Forecast</h3>\n<ol>";          
             data.forecast.forEach(function(day) {
                            html += "<li>" + day.desc + ": High is " + day.high + ", low is " + day.low
                                         + "</li>";
                       });
                    
             html += "</ol>";
          }
          else {         
             html = "<h3>" + data.error + "</h3>";         
          }
       
          $("#forecast").html(html);
      })
      .fail(function(jqXHR) { //the property error runs if there is a problem contacting the server, if the data is letters and not numbers
         $("#forecast").html("There was a problem contacting the server: " +
            jqXHR.status + " " + jqXHR.responseText);
      });
});
