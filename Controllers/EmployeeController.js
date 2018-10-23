(function () {

  var app = angular.module("employeeManager");

  var EmployeeController = function ($scope, moqDatabase, $window) {

    $scope.selected = {};

 

    $scope.submitForm = function (contactForm) {
      console.log($scope.selected.selectedSupervisor); 
      // console.log("hello from submit form");
      // console.log("selected:" + selected);
      // console.log("selected.selectedSupervisor:" + $scope.selectedSupervisor)
      // console.log("contactForm.selected:" + contactForm.selected);
      // console.log("contactForm.selectedSupervisor:" + contactForm.selectedSupervisor);
      // console.log("contactForm.selected.selectedSupervisor:" + contactForm.selected.selectedSupervisor);


      var createdEmployee = createEmployee(contactForm);
      var isEmployeeValid = validateEmployee(createdEmployee);
      if (isEmployeeValid) {
        moqDatabase.addEmployee(createdEmployee);
        $window.location.href = '#main';
        console.log(moqDatabase.getEmployees());
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

    var validateEmployee = function (createdEmployee) {
      var vacationError = isThereVacationDaysError(createdEmployee.vacationDays);
      var dateError = isThereEmploymentDateError(createdEmployee.employedSince);
      var supervisorError = isThereSupervisorError(createdEmployee);

      if (!vacationError && !dateError && !supervisorError) {
        return true;

      } else {
        displayErrors(vacationError, dateError, supervisorError);
        return false
      }
    };

    var displayErrors = function (vacationError, dateError, supervisorError) {
      if (vacationError) {
        alert("Vacation days field is not a number, or it's less than 0")
      } else if (dateError) {
        alert("Employee can't start work in future year !");
      } else if (supervisorError) {
        alert("Employee can't be it's own supervisor !");
      }
    };

    var isThereVacationDaysError = function (vacationDays) {
      vacationDays = Number(vacationDays);
      if (typeof vacationDays === 'number') {
        return !(vacationDays >= 0);
      } else {
        return true;
      }
    };

    var isThereEmploymentDateError = function (date) {
      var dateLength = date.length;
      var yearOfEmployment = date.slice(dateLength - 4, dateLength);

      var today = new Date();
      var currentYear = today.getFullYear();

      if (yearOfEmployment > currentYear) {
        return true;
      } else {
        return false;
      }
    };

    var isThereSupervisorError = function (employee) {
      var employeeFullName = employee.name + " " + employee.surname;
      if (employeeFullName === employee.supervisor) {
        return true;
      } else {
        return false;
      }
    };

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