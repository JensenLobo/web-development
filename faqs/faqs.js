"use strict";
$(document).ready( () => {

    // set event handler for all h2 tags
    $("#faqs h2").click( evt => {
        // get clicked h2 tag
        const h2 = evt.currentTarget;

        // toggle minus class for h2 tag
        $(h2).toggleClass("minus");

        // show or hide related div
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
           $(h2).next().show();
        }

        evt.preventDefault();
    });

    // set focus on first h2 tag's <a> tag
    $("#faqs").find("a:first").focus();
});

// the difference between both the index html and index1 html is in the js files. The main difference that I see is going to the next h2. In this js file
// there is an if statement that will give the different events and have an action per each event.
// in the faqs1 js file it is just using the next().toggleClass() which allows for the same action to occur as the if statements in faqs js file
// but instead of adding an if statement to see test the different states of h2 being clicked the toggleClass() does it for you and the next() goes for the next h2 element