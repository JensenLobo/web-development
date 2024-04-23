var text_value = "";

// Get the input from the text box
function get_text_value(){ //gets the input from the text box, yes function name makes sense

text_value = document.getElementById("text_input").value
  console.log(text_value);
  getVideo();
}
/* The offcial doc for the youtube api
https://developers.google.com/youtube/v3/docs/search/list
*/

// function to call youtube API
function getVideo() {

      $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyCItv1Gvz8wLfzTztvD1g-oV45tyvNdu2I',
            q: text_value, // it stores the text value, no it will always have a video pop up with miami
            part: 'snippet',
            maxResults: 1, // it shows only one result that pops up with that key word
            type: 'video',
            videoEmbeddable: true,
        },
        success: function(data){
            embedVideo(data)
        },
        error: function(response){
            console.log("Request Failed");
        }
      });
    }
// Display result back to the browser
    function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
    $('#show_result').show()
    $('#input_value').hide()
}

window.onload = function() {
  document.getElementById("get_a_youtube_video").onclick = get_text_value;

};
