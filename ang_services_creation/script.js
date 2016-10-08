var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    console.log("app provider")
    // Feature Set 1 - Time to provide
    //Create a variable to hold this
    var self_sgtData = this;
    //Create a variable to hold your api key but set it to an empty string
    var api_key = ""; 
    //Create a variable to hold the API url but set it to an empty string
    var api_url = "";

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log){
        $log.log("app provider get");
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            call_api: function(){
                var api_data = {"api_key": self_sgtData.api_key};
                var api_string= $.param(api_data);
                var defer = $q.defer();
                $http({
                    url:  self_sgtData.api_url,
                    method: "POST",
                    data: api_string,
                    headers:  {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .then(
                    function(success_response){
                        defer.resolve(success_response);
                        $log.info("call_api success: ", success_response);
                    },
                    function(fail_response){
                        defer.reject("Error msg: " + fail_response);
                        $log.warn("call_api fail: ", fail_response);
                    });
                return defer.promise;
            },
        };
    };
});
app.config(function(sgtDataProvider){
    //Config your provider here to set the api_key and the api_url
    console.log("app config");
    sgtDataProvider.api_key = "Yd2V1lB6e5";
    sgtDataProvider.api_url = "http://s-apis.learningfuze.com/sgt/get";
    });

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(sgtData, $log){
    $log.log("app controller");
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var self_ioController = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    this.data = {};
    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help
    this.getData = function(){
        $log.info("app controller getData");
        sgtData.call_api().then(
            function(success_data){
                $log.info("getData success: ", success_data.data);
                self_ioController.data = success_data.data;
            },
            function(fail_data){
                $log.warn("getData fail: ", fail_data);
            });
    };
});