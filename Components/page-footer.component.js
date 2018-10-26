(function () {

    angular.module("employeeManager").component("pageFooter", {
        controllerAs: "vm",
        controller: ["moqDatabase", controller],
        templateUrl: "Components/page-footer.component.html",
        bindings:{
            count: "<"
        }
    })

    function controller(moqDatabase) {
        var vm = this;
       
    }
}());