(function(){
  
  var app = angular.module("employeeManager",["ngRoute","ngSanitize", "ui.select"]);
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/contact",{
        templateUrl: "contact.html",
        controller: "EmployeeController"
      })
      .otherwise({redirectTo:"/main"});
  });


  
}());

