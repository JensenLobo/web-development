"use strict";
$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty - 300 > -900) {
            newLeftProperty = leftProperty - 300;
        }
        else {
            newLeftProperty = -600; //this stops the slider from repeating
        }
        
        if(slider.queue().length == 0){
            slider.animate({left: newLeftProperty, opacity: 0.2}, 1000).fadeTo(0,1); //chaining to allow for a fade during the animate method being called
        }
        //after the right button is clicked the value of leftProperty is the left most book
        //the value of newLeftProperty is leftProperty - 300, basically moving 3 books worth of space
        //the 300 represents the margin of the pixels currently where the images are scaled to
        // when you change from 300 to 100 the amount of books to the left changes from 3 to 1, that means that 1 book represents 100
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);  
        // the animate method moves the images left when the right button is click  
        
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 300;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);
    });

});