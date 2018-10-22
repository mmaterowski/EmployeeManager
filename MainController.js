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

    // UI SELECT
          $scope.itemArray = [
            {id: 1, name: 'first'},
            {id: 2, name: 'second'},
            {id: 3, name: 'third'},
            {id: 4, name: 'fourth'},
            {id: 5, name: 'fifth'},
        ];
    
        $scope.selectedItem = {id: 0,name: "empty"}

        $scope.updateSelectedItem = function(item){
          console.log("this is item:" + item);
          $scope.selectedItem = item;

          console.log("i'm firing it");
        };
    
  };

  app.controller("MainController", MainController);
}());