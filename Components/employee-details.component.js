(function(){

    angular.module("employeeManager").component("employeeDetails",{
        templateUrl : "Components/employee-details.component.html",
        controller:"MainController",
        controllerAs:"vm",
        bindings:{
            employeeName : "<"
        }
    })

}());