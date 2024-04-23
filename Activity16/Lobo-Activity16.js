$(document).ready(function(){
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" + "format=json&jsoncallback=?&tags=vectacorpbuilding";
    $.getJSON(url, function (data) {
        var html = "";
        $.each(data.items, function (k, val) {
            if (val.author_id == "82407828@N07") {
                var image = val.media.m;
                var title = JSON.stringify(val.title);
                html += "<a href=" + image + " data-lightbox=\"vectracorp\" data-title=" + title + "> <img src=" + image + " ></a>";
            };
        });
        $("#new_building").html(html);
    });
});