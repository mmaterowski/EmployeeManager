(function(){
    var app = angular.module("employeeManager");
    
    var FooterController = function (){
        var vm = this;
        
        vm.employeeCount = 6;
    };

    app.controller("FooterController",FooterController)
}());