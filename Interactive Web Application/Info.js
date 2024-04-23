// tooltips for first page
// when you hover over certain text a pop up box will appear with more information about that certain text

$(document).ready(function(){
    $("#insta").tooltip();
    $("#terms").tooltip();
    
    $.ajax({
        type: "get",
        url: "HomePageInfo.json",
        beforeSend: function() {
            $("#HomePageInfo").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#HomePageInfo").html("");
            $.each(data, function() {
                $.each(this, function(key, value){
                    $("#HomePageInfo").append
                ("<h2>" + value.title + "</h2>"+
                    value.aboutus);
                });
                
            });
        }


    });
});