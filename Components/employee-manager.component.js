(function(){
    angular.module("employeeManager").component("employeeManagerApp",{
        templateUrl:"Components/employee-manager.component.html",
        controllerAs:'vm',
        controller: ["moqDatabase","$rootScope",controller]

    })


    function controller(moqDatabase,$rootScope){
        var vm= this;
        vm.employeeCount = moqDatabase.getEmployeeCount();
         $rootScope.onEmployeeCountChanged = function(){
             vm.employeeCount = moqDatabase.getEmployeeCount();
         };
    }
  
}());