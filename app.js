(function(){
  
  var app = angular.module("employeeManager",["ngRoute","ngSanitize", "ui.select",'720kb.datepicker']);
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateUrl: "Templates/main.html",
        controller: "MainController"
      })
      .when("/contact",{
        templateUrl: "Templates/contact.html",
        controller: "EmployeeController"
      })
      .otherwise({redirectTo:"/main"});
  });
}());

