(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope, $window, moqDatabase, errorVerifier, $routeParams) {
    var vm = this;
    vm.$onInit = function () {
      console.log($routeParams);
    }
    $scope.idFromUrl = $routeParams.employeeId;

    //   $scope.$on('employeeEdit', function () {
    //     console.log($routeParams.employeeId);
    //     fillForm($routeParams.employeeId);
    // });

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

    $scope.selected = {};
    $scope.supervisorsArray = '';

    $scope.init = function () {
      $scope.date = null;
      $scope.format = 'yyyy/MM/dd';
      $scope.datepickerOptions = {
        minDate: new Date('2010-05-01'),
        initDate: new Date()
      };
    };

    $scope.submitForm = function () {
      var createdEmployee = createEmployee();
      var isEmployeeValid = errorVerifier.verifyEmployee(createdEmployee);
      if (isEmployeeValid) {
        moqDatabase.addEmployee(createdEmployee);
        $window.location.href = '#';
      }
    };

    function createEmployee() {

      return {
        id: 0,
        name: $scope.name,
        surname: $scope.surname,
        employedSince: parseDate($scope.date),
        vacationDays: $scope.vacationDays,
        supervisorName: $scope.selected.selectedSupervisor.name
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

    $scope.getSupervisorsOnInit = function () {
      var employees = moqDatabase.getEmployees();
      $scope.supervisorsArray = assingEmployeeNamesToArray(employees);
    };

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
  };

  app.controller("EmployeeController", EmployeeController);
}());