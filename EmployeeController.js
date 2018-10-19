(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope, $http) {

    $scope.addEmployee = function () {

      $scope.message = "added";
    };
    
  };

  app.controller("EmployeeController", EmployeeController);
}());