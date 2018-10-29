(function () {

    angular.module("employeeManager").component("employeeTable", {
        controllerAs: "vm",
        controller: ["moqDatabase", controller],
        bindings: {
            "divisor": "<"
        },
        templateUrl: "Components/employee-table.component.html"
    });

    function controller(moqDatabase) {
        var vm = this;

        vm.$onInit = function () {
            vm.divisorParameter = vm.divisor
            fetchEmployeeData = (function () {
                vm.data = moqDatabase.getEmployees();
            }());
        }

        vm.filter = function () {
            vm.data = moqDatabase.filterEmployees(vm.divisorParameter);
        }

        fetchEmployeeData = (function () {
            vm.data = moqDatabase.getEmployees();

        }());

        vm.deleteEmployee = function (employeeID) {
            moqDatabase.deleteEmployee(employeeID);
        };
    }
}());