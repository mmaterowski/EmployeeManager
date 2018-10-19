(function() {

  var app = angular.module("employeeManager");

  var MainController = function($scope,$http) {
    
    var onUsersFetched = function(employees){
      $scope.data=employees.data;
      $scope.error = "";
    };

    var onError = function(){
      $scope.error= "Error occured";
    };
    
    $scope.fetchEmployeeData = function(){
        return $http.get("/workers.json")
          .then(onUsersFetched,onError)
          };
    
  };

  app.controller("MainController", MainController);
}());