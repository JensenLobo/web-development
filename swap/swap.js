"use strict";
$(document).ready( () => {

    // preload images
    $("#image_list a").each( (index, link) => { //the values of index was never given a value but when it each image is clicked it gives a number to represent the what the index is.
        const image = new Image();
        image.src = link.href; // link.href referes to the link that each image has stated in the html file
    });

    // set up event handlers for links    
    $("#image_list a").click( evt => {
        // get clicked <a> tag
        const link = evt.currentTarget;
        
        // swap image
        $("#main_image").attr("src", link.href);
        
        //swap caption
        $("#caption").text(link.title);
                
        // cancel the default action of the link
        evt.preventDefault();
    });

    // move focus to first thumbnail
    $("li:eq(2) a").trigger("click"); //the jQuery selector returns the first image is shown when the website is running.
    $("li:eq(2) a").focus();
});