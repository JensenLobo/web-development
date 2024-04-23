//For the button to go back to the main part of the website
$(document).ready(function(){
    
    
    function action(highlight){
        $("#back").effect(highlight, 100);
    }

    
    $("#back").click( function() {
        action("highlight");
    });

});

//this causes the button to turn yellow when clicked but it only shows after you 