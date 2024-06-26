"use strict";

// returns date string in YYYY-MM-DD format
const getDateString = date => 
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const displayPicture = data => {
    let html = "";    
    if(data.error) {       // error – display message
        html += `<span class="error">${data.error.message}</span>`; 
    }
    else if (data.code) {  // problem – display message
        html += `<span class="error">${data.msg}</span>`; 
    }
    else {                 // success – display image/video data
        html += `<h3>${data.title}</h3>`;
        const width = 700;
        switch (data.media_type) {
            case "image":
                html += `<img src="${data.url}" width="${width}" 
                        alt="NASA photo">`;
                break;
            case "video":
                html += `<iframe src="${data.url}" 
                          frameborder="0" 
                          allowfullscreen></iframe>`;
                break;
            default:
                html += `<img src="images/notavailable.png" 
                        width="${width}" alt="NASA photo">`;
        }

        // date and copyright
        html += `<div>${data.date}`;
        if (data.copyright) {
            html += `<span class="right">&copy; ${data.copyright}</span>`;
        }
        html += "</div>";

        // explanation
        html += `<p>${data.explanation}</p>`;
    }

    // display HTML
    $("#display").html(html);
};

const displayError = error => {
    let html = `<span class="error">${error.message}</span>`;
    $("#display").html(html);
};

$(document).ready( () => {

    // on load, get today's date in YYYY-MM-DD format
    const today = new Date(); //an error pops up if the date doesn't follow the format of date that it is said in line5
    let dateStr = getDateString(today);  

    // set today's date in textbox
    const dateTextbox = $("#date");
    dateTextbox.val(dateStr);
    dateTextbox.focus();

    $("#view_button").click( () => {

        // get date from textbox
        dateStr = $("#date").val();
        const dateObj = new Date(dateStr);

        if (dateObj == "Invalid Date") {
            const msg = "Please enter valid date in YYYY-MM-DD format.";
            $("#display").html(`<span class="error">${msg}</span>`);
        }
        else {
            // make sure date string is in proper format
            dateStr = getDateString(dateObj); 

            // build URL for API request
            const domain = `https://api.nasa.gov/planetary/apod`; //this holds all of the dates that the infmoration is getting got from
            const request = `?api_key=DEMO_KEY&date=${dateStr}`;
            const url = domain + request;

            fetch(url)//fetch actually get the information from the json then displays the json code into the website
                .then( response => response.json() )
                .then( json => displayPicture(json) )
                .catch( e => displayError(e) );
        }

        /*  $.ajax(url)
            .done( json => displayPicture(json))
            .fail( e=> displayError(e));

        */

        
        $("#date").focus();
    });
});