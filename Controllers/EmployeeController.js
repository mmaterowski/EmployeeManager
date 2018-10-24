(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope, $window, moqDatabase, errorVerifier,uibDateParser) {

    $scope.selected = {};
    $scope.supervisorsArray = '';

    $scope.init = function(){
      $scope.date = null;
      $scope.format = 'yyyy/MM/dd';
      $scope.datepickerOptions = {
        minDate: new Date('2010-05-01'),
        initDate: new Date()
      };
    };

    $scope.submitForm = function (contactForm) {
      var createdEmployee = createEmployee(contactForm);
      var isEmployeeValid = errorVerifier.verifyEmployee(createdEmployee);
      if (isEmployeeValid) {
        moqDatabase.addEmployee(createdEmployee);
        $window.location.href = '#';
      }
    };

    function createEmployee(employee) {
      console.log($scope.name);
      return {
        id: 0,
        name: employee.name.$viewValue,
        surname: employee.surname.$viewValue,
        employedSince: parseDate($scope.date),
        vacationDays: employee.vacationDays.$viewValue,
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