(function () {

  var app = angular.module("employeeManager", ["ngSanitize", "ui.select", 'ui.bootstrap', 'ngRoute']);

  app.config( function ($routeProvider) {

    $routeProvider.when('/home', { templateUrl:"index.html", controller: 'EmployeeController' });
    $routeProvider.when('/home/:employeeId', { template:"<div><h1>WORKING</h1></div>"});

    $routeProvider.otherwise({ redirectTo: "/home" });
  });

}());