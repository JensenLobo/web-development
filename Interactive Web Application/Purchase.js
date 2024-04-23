$(document).ready(function(){
    
    function test(){
        $("#colorAnim").animate({
            backgroundColor: "lightblue",
            color: "black"}, "slow");
        
    }
    function out(){
        $("#colorAnim").animate({
            backgroundColor: "yellow",
            color: "black"}, "slow");
        
    }

    $("#colorAnim").hover(function(){
        test();
    })

    $("#colorAnim").mouseleave(function(){
        out();
    })
});

/* code from the zybooks and I just converted it to so it would work better
$("#colorAnim").hover(function() {
    $(this).animate({
       backgroundColor: "lightblue",
       color: "black"
    }, "slow");
 }, function() {
    $(this).animate({
       backgroundColor: "yellow",
       color: "black"
    }, "slow");
 });*/
