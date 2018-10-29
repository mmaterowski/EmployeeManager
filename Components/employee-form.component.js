(function () {

    angular.module("employeeManager").component("employeeForm", {
        controllerAs: "vm",
        controller: ['moqDatabase', "errorVerifier", "$routeParams", "$location", controller],
        templateUrl: "Components/employee-form.component.html"
    });


    function controller(moqDatabase, errorVerifier, $routeParams, $location) {
        var vm = this;

        vm.name = '';
        vm.surname = '';
        vm.vacationDays = '';
        vm.selected = {};
        vm.selected.selectedSupervisor = {};
        vm.selected.selectedSupervisor.name = '';
        vm.idFromParams = $routeParams.employeeId;

        vm.employees = moqDatabase.getEmployees();
        vm.supervisorsArray = assingEmployeeNamesToArray(vm.employees);
        vm.buttonName = "Add employee";
        vm.header = "Add an employee";

        vm.$onInit = function () {
            if (vm.idFromParams) {
                fillFormFieldsWithData(vm.idFromParams);
            }
        }

        function fillFormFieldsWithData() {
            var foundEmployee = moqDatabase.getEmployeeById(vm.idFromParams);
            vm.name = foundEmployee.name;
            vm.surname = foundEmployee.surname;
            vm.employedSince = foundEmployee.employedSince,
            vm.date = constructProperlyFormattedDate(foundEmployee.employedSince);
            vm.vacationDays = foundEmployee.vacationDays
            vm.selected.selectedSupervisor.name = foundEmployee.supervisorName
            vm.buttonName = "Confirm changes";
            vm.header = "Edit employee " + foundEmployee.name + " " + foundEmployee.surname;
        }

        vm.submitForm = function () {
            var createdEmployee = createEmployee();
            var isEmployeeValid = errorVerifier.verifyEmployee(createdEmployee)
            if (isEmployeeValid) {
                if (vm.idFromParams) {
                    var index = moqDatabase.getEmployeeIndex(vm.idFromParams);
                    moqDatabase.updateEmployee(index, createdEmployee);
                    location.reload();
                    $location.path("#");

                    
                } else {
                    moqDatabase.addEmployee(createdEmployee);
                }
            }
        };

        function createEmployee() {
            return {
                id: vm.idFromParams,
                name: vm.name,
                surname: vm.surname,
                employedSince: parseDate(vm.date),
                vacationDays: vm.vacationDays,
                supervisorName: vm.selected.selectedSupervisor.name
            }
        };

        function parseDate(date) {
            if (date) {
                var correctlyFormattedDate = '';
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                month = month + 1;

                if (month > 9 && day > 9) {
                    correctlyFormattedDate = year + "-" + month + "-" + day;
                } else if (month > 9) {
                    correctlyFormattedDate = year + "-" + month + "-" + "0" + day;
                } else if (day > 9) {
                    correctlyFormattedDate = year + "-" + "0" + month + "-" + day;
                } else {
                    correctlyFormattedDate = year + "-" + "0" + month + "-" + "0" + day;
                }
                
                return correctlyFormattedDate;

            } else {
                alert("date related error!");
            }
        }

        function constructProperlyFormattedDate(dateString) {

            var year = dateString.substring(0, 4);
            var month = dateString.substring(5, 7);
            var month = Number(month) - 1;
            var day = dateString.substring(8, 11);
            var date = new Date();

            date.setFullYear(year);
            date.setMonth(month);
            date.setDate(day);

            return date;
        }

        function assingEmployeeNamesToArray(employeesData) {
            var supervisorsArray = [];
            for (var i = 0; i < employeesData.length; i++) {
                supervisorName = employeesData[i].name;
                supervisorSurname = employeesData[i].surname;
                supervisorsArray.push({
                    id: i,
                    name: supervisorName + " " + supervisorSurname
                });
            }
            return supervisorsArray;
        };
    }

}());