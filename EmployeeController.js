(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope, $http) {

    $scope.message = "added";
    $scope.supervisors = "";
    $scope.selected = {};
    $scope.supervisorData = '';


    $scope.submitForm = function (contactForm) {
      var createdEmployee = createEmployee(contactForm);
      console.log(createdEmployee);
      validateEmployeeObject(createdEmployee);

    };

    var createEmployee = function (form) {
      return {
        name: form.name.$viewValue,
        surname: form.surname.$viewValue,
        employedSince: dateParser(form.employedSince.$viewValue),
        vacationDays: form.vacationDays.$viewValue,
        supervisor: supervisorData
      }
    };

    var dateParser = function (dateObject) {
      var dateInfo = dateObject.split(" ");
      var correctlyFormattedDate = dateInfo[2] + "-" + dateInfo[1] + "-" + dateInfo[3];
      return correctlyFormattedDate;
    }

    var validateEmployeeObject = function (createdEmployee) {
      var vacationError = checkForVacationDaysError(createdEmployee.vacationDays);
      var dateError = checkForEmploymentDateError(createdEmployee.employedSince);
      var supervisorError = checkForSupervisorErrors(createdEmployee);
      if (!vacationError && !dateError &&!supervisorError) {
        console.log("should return objecT");
        //return object
      } else {
        displayErrors(vacationError, dateError,supervisorError);
      }
    };

    var displayErrors = function (vacationError, dateError, supervisorError) {
      if (vacationError) {
        alert("Vacation days field is not a number, or it's less than 0")
      } else if (dateError) {
        alert("Employee can't start work in future year !");
      } else if (supervisorError){
        alert("Employee can't be it's own supervisor !");
      }
    };

    var checkForVacationDaysError = function (vacationDays) {
      if (!areVacationDaysValid(vacationDays)) {
        return true;
      }
      return false;
    };

    var areVacationDaysValid = function (vacationDays) {
      vacationDays = Number(vacationDays);
      if (typeof vacationDays === 'number') {
        return (vacationDays >= 0);
      } else {
        return true;
      }
    };

    var checkForEmploymentDateError = function (date) {
      if (!isEmploymentDateValid(date)) {
        return true;
      }
      return false;
    };

    var isEmploymentDateValid = function (date) {
      var dateLength = date.length;
      var yearOfEmployment = date.slice(dateLength - 4, dateLength);

      var today = new Date();
      var currentYear = today.getFullYear();

      if (yearOfEmployment > currentYear) {
        return false;
      } else {
        return true;
      }
    };

    var checkForSupervisorErrors = function (employee) {
      var employeeFullName = employee.name + " " + employee.surname;
      if (employeeFullName === employee.supervisor) {
        return true;
      } else {
        return false;
      }
    };
    var onUsersFetched = function (employees) {
      supervisors = employees.data;
      $scope.selected.supervisorsArray = assingEmployeeNamesToArray(supervisors);
    };

    var assingEmployeeNamesToArray = function (supervisors) {
      var supervisorsArray = [];
      for (var i = 0; i < supervisors.length; i++) {
        supervisorName = supervisors[i].name;
        supervisorSurname = supervisors[i].surname;
        supervisorsArray.push({
          id: i,
          name: supervisorName + " " + supervisorSurname
        });
      }
      return supervisorsArray;
    };

    var onError = function () {
      $scope.error = "Error occured";
    };

    $scope.fetchSupervisorData = (function () {
      return $http.get("/workers.json")
        .then(onUsersFetched, onError)
    })();

    $scope.updateSelectedItem = function (selectedItem) {
      supervisorData = selectedItem.name;
    };

  };

  app.controller("EmployeeController", EmployeeController);
}());