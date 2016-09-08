//Create GLOBAL variable below here on line 2
var global_result; // Feature Set 1 - Road to success
var image_array = [];
var title_array = [];
var director_array = [];
$(document).ready(function(){
    $('button').click(function(){
        var main = $("#main");
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                global_result = result // ** Holds all the informaticn pulled from the original webpage
                var wanted_image = global_result.feed.entry[0]['im:image'][2].label;
                for ( i = 0; i < global_result.feed.entry.length; i++){
                    // ** Creating arrays that hold all the instances of their data
                    image_array.push(global_result.feed.entry[i]['im:image'][2].label);
                    title_array.push(global_result.feed.entry[i]['im:name']);
                    director_array.push(global_result.feed.entry[i]["im:artist"]);
                    // ** Saving the title & director of this cycle of the for loop
                    var current_title = title_array[i].label;
                    var current_director = director_array[i].label;
                    // ** variables holding the to be html element versions of the data
                    var container = $("<div>",{class:'movie_container'}); // ** Holds the Title & director info
                    var movie_info = $("<movie_info>");
                    var title = $('<h3>',{text: current_title});
                    var director = $('<h4>',{text: current_director});
                    var image = $('<img>',{src:image_array[i]});
                    // ** displaying the data into the webpage
                    movie_info.append(title, director);
                    container.append(movie_info,image);
                    main.append(container);
                }
            }
        });
    });
});