(function () {

  var app = angular.module("employeeManager", ["ngSanitize", "ui.select", 'ui.bootstrap', 'ngRoute']);

  app.config( function ($routeProvider) {

    $routeProvider.when('/home', { template:"<employee-manager-app></employee-manager-app>" });
    $routeProvider.when('/employee/:employeeId', { template:"<employee-form></employee-form>"});

    $routeProvider.otherwise({ redirectTo: "/home" });
  });

}());