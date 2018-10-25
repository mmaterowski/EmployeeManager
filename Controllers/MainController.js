(function () {

  var app = angular.module("employeeManager");

  var MainController = function ($scope, moqDatabase,$rootScope) {
    var vm = this;
    vm.employeeName = 'nothing';
    vm.passedEmployee = {};
    vm.employeeEdit = function(){
      $rootScope.$broadcast('employeeEdit');
    };


    fetchEmployeeData = (function () {
      $scope.data = moqDatabase.getEmployees();
    }());

    $scope.deleteEmployee = function (employeeID) {
      moqDatabase.deleteEmployee(employeeID);
    };


}
  app.controller("MainController", MainController);
}());