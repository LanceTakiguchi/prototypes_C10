//Create GLOBAL variable below here on line 2
var global_result; // Feature Set 1 - Road to success
var image_array = [];
var title_array = [];
var director_array = [];
$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        var main = $("#main");
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result
                var wanted_image = global_result.feed.entry[0]['im:image'][2].label;
                for ( i = 0; i < global_result.feed.entry.length; i++){
                    image_array.push(global_result.feed.entry[i]['im:image'][2].label);
                    title_array.push(global_result.feed.entry[i]['im:name']);
                    director_array.push(global_result.feed.entry[i]["im:artist"]);
                    var current_title = title_array[i].label;
                    var current_director = director_array[i].label;
                    var container = $("<div>",{
                        class:'movie_container'
                    });
                    var movie_info = $("<movie_info>");
                    var title = $('<h3>',{text: current_title});
                    var director = $('<h4>',{text: current_director}); //TODO: Why does this not load?
                    var image = $('<img>',{src:image_array[i]});
                    movie_info.append(title, director);
                    container.append(movie_info,image);
                    main.append(container);
                }
                console.log("image_array: ", image_array);
                console.log('End of click function');
            }
        });
    });
});