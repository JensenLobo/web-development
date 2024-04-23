$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each( (index, link) => {
                const image = new Image();
                image.src = link.href;
        });

        // set up the event handlers for each link
        $("#image_list a").click( evt => {
                const link = evt.currentTarget;
                

        // get the image URL and caption for each image and animate the caption
                $("#image").fadeOut(3000,function(){
                        $("#image").attr("src",link.href).fadeIn(3000);
                })

                $("#caption").animate({
                        "font-size" : "2.0em"
                },3000);

                $("#caption").fadeOut(3000,function(){
                        $("#caption").text(link.title).fadeIn(3000);
                });
                //it was orginially id by when i checked it on the validator it said that it was a bad attribute used
        
                // cancel the default action of each link
                evt.preventDefault();
        });
    		


    // move the focus to the first link
    $("li:eq(0) a").trigger("click");
    $("li:eq(0) a").focus();

}); // end ready