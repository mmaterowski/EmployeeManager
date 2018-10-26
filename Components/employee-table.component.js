(function () {

    angular.module("employeeManager").component("employeeTable", {
        controllerAs: "vm",
        controller: ["moqDatabase", controller],

        templateUrl: "Components/employee-table.component.html"
    });

    function controller(moqDatabase, $rootScope) {
        var vm = this;
        vm.employeeName = 'nothing';
        vm.passedEmployee = {};


        fetchEmployeeData = (function () {
            vm.data = moqDatabase.getEmployees();
        }());

        vm.deleteEmployee = function (employeeID) {
            moqDatabase.deleteEmployee(employeeID);
        };
    }
}());