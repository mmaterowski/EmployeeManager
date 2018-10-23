(function () {

    var errorVerifier = function(){
        
    var verifyEmployee = function (createdEmployee) {
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
        if (employeeFullName === employee.supervisorName) {
          return true;
        } else {
          return false;
        }
      };
      return{
          verifyEmployee : verifyEmployee
      }
    }
    var module = angular.module("employeeManager");
    module.factory("errorVerifier", errorVerifier);
}());