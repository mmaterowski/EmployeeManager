(function(){
  
  var app = angular.module("employeeManager",["ngRoute"]);
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateUrl: "main.html",
        controller: "MainController"
      })
      .otherwise({redirectTo:"/main"});
  });
  
}());