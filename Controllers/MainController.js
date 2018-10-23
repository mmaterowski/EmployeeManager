(function () {

  var app = angular.module("employeeManager");

  var MainController = function ($scope, moqDatabase) {

    fetchEmployeeData = (function () {
      $scope.data = moqDatabase.getEmployees();
    }());

    $scope.deleteEmployee = function (employeeID) {
      moqDatabase.deleteEmployee(employeeID);
    };
  }
  app.controller("MainController", MainController);
}());