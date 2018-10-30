(function () {

    angular.module("employeeManager").component("employeeTable", {
        controllerAs: "vm",
        controller: ["moqDatabase", controller],
        bindings: {
            divisor: "<",
            onUserRemoved: "&"
        },
        templateUrl: "Components/employee-table.component.html"
    });

    function controller(moqDatabase) {
        var vm = this;

        vm.$onInit = function () {
            vm.divisorParameter = vm.divisor;

            fetchEmployeeData = (function () {
                vm.data = moqDatabase.getEmployees();
            }());
        }

        vm.sendUserRemovedMessage = function (message) {
            vm.onUserRemoved({
                $event: {
                    userRemovedText: message
                }
            })
        }

        vm.filter = function () {
            vm.data = moqDatabase.filterEmployees(vm.divisorParameter);
        }

        fetchEmployeeData = (function () {
            vm.data = moqDatabase.getEmployees();
        }());

        vm.deleteEmployee = function (employeeID) {
            var employee = moqDatabase.getEmployeeById(employeeID);
            var message = "Employee: " + employee.name+" "+employee.surname + " removed";
            vm.sendUserRemovedMessage(message);
            moqDatabase.deleteEmployee(employeeID);

        };
    }
}());