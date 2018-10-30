(function(){

    angular.module("employeeManager").component("employeeSection",{
        templateUrl : "Components/employee-section.component.html",
        controller: [controller],
        controllerAs:"vm"
    })

    function controller(){
        var vm = this;
        vm.userRemovedText="";
        vm.displayUserRemovedMessage = function(event){
            vm.userRemovedText = event.userRemovedText;
        }
            
    }

}());