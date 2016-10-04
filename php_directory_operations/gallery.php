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
            for(var photo in ajax_data.files){
                var dom_image = $("<img>");
                dom_image.attr("src", ajax_data.files[photo]);
                dom_image.addClass("photos");
                var image_container = $("<div>");
                image_container.append(dom_image);
                image_container.on("click", function(){
                   console.log("Hello? Testing");
                    //$("#myModal").append(dom_image); //TODO: Fix modal to display 100% photo
                    $("#myModal").modal("toggle");
                    var modal_photo = this.child();
                    modal_photo.addClass("big");
                    $("#myModal").append(modal_photo);
                });
                $("#album").append(image_container);
            }
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
    You have made.. a grave.. mistake...
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