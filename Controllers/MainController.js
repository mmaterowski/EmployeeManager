(function () {

  var app = angular.module("employeeManager");

  var MainController = function ($scope, moqDatabase) {
    var vm = this;
    vm.employeeName = 'nothing';

   

    fetchEmployeeData = (function () {
      $scope.data = moqDatabase.getEmployees();
    }());

    $scope.deleteEmployee = function (employeeID) {
      moqDatabase.deleteEmployee(employeeID);
    };


}
  app.controller("MainController", MainController);
}());