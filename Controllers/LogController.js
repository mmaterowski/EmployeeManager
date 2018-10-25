(function(){
    var app = angular.module("employeeManager");
    
    var LogController = function (){
        var vm = this;
        
        vm.message = "All employees are happy";
    };

    app.controller("LogController",LogController)
}());