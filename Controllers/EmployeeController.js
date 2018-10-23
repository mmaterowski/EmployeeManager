(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope,$window, moqDatabase, errorVerifier) {

    $scope.selected = {};

 

    $scope.submitForm = function (contactForm) {
      console.log($scope.selected.selectedSupervisor); 

      var createdEmployee = createEmployee(contactForm);
      var isEmployeeValid = errorVerifier.verifyEmployee(createdEmployee);
      if (isEmployeeValid) {
        moqDatabase.addEmployee(createdEmployee);
        $window.location.href = '#main';
      }
    };

    var createEmployee = function (employee) {
      return {
        id: 0,
        name: employee.name.$viewValue,
        surname: employee.surname.$viewValue,
        employedSince: parseDate(employee.employedSince.$viewValue),
        vacationDays: employee.vacationDays.$viewValue,
        supervisorName: $scope.selected.selectedSupervisor.name
      }
    };

    var parseDate = function (date) {
      if (date) {
        var dateInfo = date.split(" ");
        var correctlyFormattedDate = dateInfo[2] + "-" + dateInfo[1] + "-" + dateInfo[3];
        return correctlyFormattedDate;
      } else {
        alert("date related error!");
      }

    }

    var assingEmployeeNamesToArray = function (employeesData) {
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

    getSupervisors = (function () {
      var employees = moqDatabase.getEmployees();
      $scope.supervisorsArray = assingEmployeeNamesToArray(employees);
    })();


  };

  app.controller("EmployeeController", EmployeeController);
}());