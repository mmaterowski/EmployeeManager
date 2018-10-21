(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope) {

    $scope.message = "added";
    
  };

  app.controller("EmployeeController", EmployeeController);
}());