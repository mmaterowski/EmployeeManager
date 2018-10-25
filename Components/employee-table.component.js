(function(){

    angular.module("employeeManager").component("employeeTable",{
        bindings: {
            employeeName: "<"
        },
        controllerAs:"vm",
        controller: "MainController",
        
        templateUrl : "Components/employee-table.component.html"
    })

}());