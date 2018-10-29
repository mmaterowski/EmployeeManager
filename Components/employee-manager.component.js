(function(){
    angular.module("employeeManager").component("employeeManagerApp",{
        templateUrl:"Components/employee-manager.component.html",
        controllerAs:'vm',
        controller: ["moqDatabase",controller]

    })


    function controller(moqDatabase){
        var vm= this;
        vm.employeeCount = moqDatabase.getEmployeeCount();
    }
  
}());