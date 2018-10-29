(function () {

    angular.module("employeeManager").component("employeeTable", {
        controllerAs: "vm",
        controller: ["moqDatabase", "$scope", controller],
        bindings: {
            "divisor": "<"
        },
        templateUrl: "Components/employee-table.component.html"
    });

    function controller(moqDatabase,$scope) {
        var vm = this;

       

        vm.$onInit = function () {
            vm.divisorParameter = $scope.vm.divisor
            fetchEmployeeData = (function () {
                vm.data = moqDatabase.getEmployees();
                vm.data = moqDatabase.filterEmployees(vm.divisorParameter);
            }());
        }

        vm.deleteEmployee = function (employeeID) {
            moqDatabase.deleteEmployee(employeeID);
        };
    }
}());