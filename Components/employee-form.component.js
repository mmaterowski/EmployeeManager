(function () {

    angular.module("employeeManager").component("employeeForm", {
        controllerAs: "vm",
        controller: ['moqDatabase',"errorVerifier","$window",controller],
        templateUrl: "Components/employee-form.component.html"
    });


    function controller(moqDatabase,errorVerifier,$window,) {
        var vm = this;

        //   function fillForm(employeeId){
        //     console.log("employee id from fillForm:" + employeeId)
        //     var foundEmployee = moqDatabase.getEmployeeById(employeeId);
        //     console.log(foundEmployee);
        //     $scope.name = foundEmployee.name;
        //     $scope.surname = foundEmployee.surname;
        //    // employedSince: parseDate($scope.date),
        //     $scope.vacationDays = foundEmployee.vacationDays
        //     $scope.selected.selectedSupervisor.name = foundEmployee.supervisorName
        //   }

        vm.selected = {};
        vm.supervisorsArray = '';
        vm.employees = moqDatabase.getEmployees();
        vm.supervisorsArray = assingEmployeeNamesToArray(vm.employees);
        
        //vm.supervisorsArray = assingEmployeeNamesToArray(vm.employees);
        
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