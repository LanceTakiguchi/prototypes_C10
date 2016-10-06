<?php
/**
 * Created by PhpStorm.
 * User: Lance
 * Date: 03-Oct-16
 * Time: 18:45
 */
?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script>
var ajax_data = null;
function load_files(){
    $.ajax({
        url: 'get_images.php',
        dataType: 'json',
        method: 'post',
        success: function(response){
            console.log('Data retrieval successfully');
            ajax_data = response;
        },
        error: function(response){
            console.log('ajax error!');
        }
    });
}
load_files();
function ajax_wait(){
    if(ajax_data == null){
        setTimeout(ajax_wait, 10);
    }else{
        console.log(ajax_data);
            //** DOM CREATION
            var image_container = $("<div>");
            for(var photo in ajax_data.files){
                var dom_image = $("<img>");
                dom_image.attr("src", ajax_data.files[photo]);
                dom_image.addClass("photos");
                (function(){
                    dom_image.on("click", function(){
                        console.log("Hello? Testing");
                        $("#myModal").append(
                            $("<img>").attr("src", ajax_data.files[photo])
                            ); 
                    //TODO: Fix modal to display 100% photo
                    $("#myModal").modal("toggle"); //TODO: Check if image there, if so, clear old image and append new image
                    //var modal_photo = this.child();
                    //modal_photo.addClass("big");
                    //$("#myModal").append(modal_photo);
                });
                })();
                image_container.append(dom_image);
            }
            $("#album").append(image_container);
        }
    }
    ajax_wait();
    </script>
    <style>
    .photos{
        width: 25vw;
    }
    .big{
        width: 100vw;
    }
    </style>
    <h1>
        Thank you for reading this line of h1. Your participation is appreciated!
    </h1>
    <div id = album>

    </div>
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg">
            <div id="popup" class="modal-content">
                <div class="modal-header">
                    <h1>BEHOLD, I AM GENIE!</h1>
                </div>
            </div>
        </div>
    </div>