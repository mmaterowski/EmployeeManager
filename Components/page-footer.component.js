(function () {

    angular.module("employeeManager").component("pageFooter", {
        controllerAs: "vm",
        controller: [controller],
        templateUrl: "Components/page-footer.component.html"
    })

    function controller() {
        var vm = this;

        vm.employeeCount = 6;
    }
}());