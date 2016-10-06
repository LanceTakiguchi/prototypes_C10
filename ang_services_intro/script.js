var app = angular.module("myMusic", []);

app.controller("mainController", function($http, $log){

    this.get_artist = function(artist){
		var self_itunes = this;
    	$http({
    		url: "https://itunes.apple.com/search?term=" + artist + "&callback=JSON_CALLBACK", //self_itunes.url_constructor(artist_url), //TODO: Change to function
            method: "jsonp",
            cache: false
    	})
        .then(
            function(success_response){
                //$log.info("Artist", artist);
                $log.info("Here is the response", success_response.data.results);
                self_itunes.data = success_response.data.results;
            },
            function(fail_response){
                self_itunes.data = fail_response;
                $log.warn("$http Error: ", fail_response);
            });
	   };
    });