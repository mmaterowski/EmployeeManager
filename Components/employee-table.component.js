(function(){

    angular.module("employeeManager").component("employeeTable",{
        bindings: {
            employeeName: "<",
            employeeId: "<"
        },
        controllerAs:"vm",
        controller: "MainController",
        
        templateUrl : "Components/employee-table.component.html"
    })

}());



