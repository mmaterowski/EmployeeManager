(function(){

    angular.module("employeeManager").component("employeeTable",{
        bindings: {
            propertyBinding : "<"
        },
        controller: "MainController",
        
        templateUrl : "Components/employee-table.component.html"
    })

}());