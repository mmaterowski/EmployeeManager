(function () {

    angular.module("employeeManager").component("employeeTable", {
        controllerAs: "vm",
        controller: ["moqDatabase", controller],
        templateUrl: "Components/employee-table.component.html"
    });

    function controller(moqDatabase) {
        var vm = this;
        
        fetchEmployeeData = (function () {
            vm.data = moqDatabase.getEmployees();
        }());

        vm.deleteEmployee = function (employeeID) {
            moqDatabase.deleteEmployee(employeeID);
        };
    }
}());