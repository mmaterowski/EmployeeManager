(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope) {

    $scope.message = "added";

    $scope.submitForm = function(isValid){
      if (isValid) {
        alert('everything is fine');
      }
      else{
        alert('form is not valid');
      }
    }
    
  };

  app.controller("EmployeeController", EmployeeController);
}());