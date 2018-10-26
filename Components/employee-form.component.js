(function () {

    angular.module("employeeManager").component("employeeForm", {
        controllerAs: "vm",
        controller: ['moqDatabase', "errorVerifier", "$routeParams","uibDateParser", controller],
        templateUrl: "Components/employee-form.component.html"
    });


    function controller(moqDatabase, errorVerifier, $routeParams,uibDateParser) {
        var vm = this;

        vm.$onInit = function () {
            vm.init();
            if (vm.idFromParams) {

                var foundEmployee = moqDatabase.getEmployeeById(vm.idFromParams);
                vm.name = foundEmployee.name;
                vm.surname = foundEmployee.surname;
              //  vm.employedSince = foundEmployee.employedSince,
                vm.vacationDays = foundEmployee.vacationDays
                vm.selected.selectedSupervisor.name = foundEmployee.supervisorName
                vm.buttonName = "Confirm changes";
                vm.header = "Edit employee " + foundEmployee.name + " " + foundEmployee.surname;
            }

        }
        vm.name = '';
        vm.surname = '';
        vm.vacationDays = '';
        vm.selected = {};
        vm.selected.selectedSupervisor = {};
        vm.selected.selectedSupervisor.name = '';
        vm.idFromParams = $routeParams.employeeId;
        vm.supervisorsArray = '';
        vm.employees = moqDatabase.getEmployees();
        vm.supervisorsArray = assingEmployeeNamesToArray(vm.employees);
        vm.buttonName = "Add employee";
        vm.header = "Add an employee";

        //trying to parse date 
       // var dateString = "2018-10-10T22:00:00.000Z";
       // dateString.parse()

        vm.init = function () {
            vm.date = null;
            vm.format = 'yyyy/MM/dd';
            vm.datepickerOptions = {
                minDate: new Date('2010-05-01'),
                initDate: new Date()
            };
        };


        vm.submitForm = function () {
            var createdEmployee = createEmployee();
            var isEmployeeValid = errorVerifier.verifyEmployee(createdEmployee);
            if (isEmployeeValid) {
                moqDatabase.addEmployee(createdEmployee);
            }
        };

        function createEmployee() {

            return {
                id: 0,
                name: vm.name,
                surname: vm.surname,
                employedSince: parseDate(vm.date),
                vacationDays: vm.vacationDays,
                supervisorName: vm.selected.selectedSupervisor.name
            }
        };

        function parseDate(date) {
            if (date) {
                date = date.toString();
                var dateInfo = date.split(" ");
                var correctlyFormattedDate = dateInfo[2] + "-" + dateInfo[1] + "-" + dateInfo[3];
                return correctlyFormattedDate;
            } else {
                alert("date related error!");
            }
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