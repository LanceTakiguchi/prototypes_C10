// Create the route module and name it routeApp
var app = angular.module("routeApp", ["ngRoute"]);
// Config the routes
app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'pages/home.html',
      controller: 'routeCtrl'
    })
  .when('/about',{
      templateUrl: 'pages/about.html',
      controller: 'aboutController'
    })
  .when('/contact',{
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
    });
});
         // route for the home page

        // route for the about page

        // route for the contact page


// Create the controllers for the different pages below

// home page controller
    // Create a message to display in the view
app.controller('routeCtrl', function($scope){
	$scope.message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum quam ac ipsum lobortis, non vestibulum tortor efficitur. Sed posuere lacus in tortor interdum finibus. Donec nec nulla nisi. Nullam sed elit eu quam tempus commodo. Vivamus eu tortor quis mauris malesuada dignissim. Pellentesque enim tellus, consectetur sed ultrices quis, commodo et enim. Maecenas nec molestie mauris. Fusce sagittis tincidunt sodales. Mauris sit amet auctor est. Proin vitae leo augue. Fusce auctor justo a libero porta fringilla. Vivamus dignissim lorem vel magna bibendum porttitor.";
});
app.controller('aboutController', function($scope){
  $scope.message = "We are all about the people";
});
app.controller('contactController', function($scope){
  $scope.message = "Contact your local drug dealer to get your carrots";
});
// about page controller
    // Create a message to display in the view

// contact page controller
    // Create a message to display in the view
