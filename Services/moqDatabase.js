(function () {

    var moqDatabase = function () {

        var employees = [
            {
                id: 1,
                name: "Ora",
                surname: "Page",
                employedSince: "10-Dec-2015",
                vacationDays: 4,
                supervisorName: "Dave Adams"
            },
            {
                id: 2,
                name: "Antonio",
                surname: "Morris",
                employedSince: "16-Jan-2016",
                vacationDays: 5,
                supervisorName: "Dave Adams"
            },
            {
                id: 3,
                name: "Andre",
                surname: "Brewer",
                employedSince: "23-Nov-2000",
                vacationDays: 10,
                supervisorName: "Dave Adams"
            },
            {
                id: 4,
                name: "Paulette",
                surname: "Stewart",
                employedSince: "15-Sep-2005",
                vacationDays: 2,
                supervisorName: "Dave Adams"
            },
            {
                id: 5,
                name: "Dave",
                surname: "Adams",
                employedSince: "12-Feb-2018",
                vacationDays: 15,
                supervisorName: "Ora Page"
            },
            {
                id: 6,
                name: "Elisa",
                surname: "Santos",
                employedSince: "16-Jan-2008",
                vacationDays: 15,
                supervisorName: "Ora Page"
            }
        ];

        var getEmployees = function () {
            return employees;
        };


        var addEmployee = function (employee) {
            employee.id = assignEmployeeIndex();
            employees.push(employee);
        };

        var assignEmployeeIndex = function () {
            while (true) {
                var indexNumber = generateRandomNumber();
                if (doesCollectionContainsIndex(indexNumber)) {
                    return indexNumber;
                } else {

                    continue;
                }
            }
        };

        var generateRandomNumber = function () {
            return Math.trunc((Math.random() * 1000));
        };

        var doesCollectionContainsIndex = function (index) {
            var item = employees.filter(function (employee) {
                return (employee.id === index);
            })
            return item;
        };

        var deleteEmployee = function (employeeId) {
            var foundEmployee = employees.filter(function (employee) {
                return employee.id === employeeId;
            });
            var indexOfFoundEmployee = employees.indexOf(foundEmployee);

            employees.splice(indexOfFoundEmployee, 1);
        };

        var editEmployee = function (employee) {
            var indexOfFoundEmployee = employees.indexof(employee);

            employees[indexOfFoundEmployee].name = employee.name;
            employees[indexOfFoundEmployee].name = employee.surname;
            employees[indexOfFoundEmployee].name = employee.vacationDays;
            employees[indexOfFoundEmployee].name = employee.employedSice;
            employees[indexOfFoundEmployee].name = employee.supervisorName;
        };

        return {
            getEmployees: getEmployees,
            addEmployee: addEmployee,
            deleteEmployee: deleteEmployee,
            editEmployee: editEmployee
        };
    };
    var module = angular.module("employeeManager");
    module.factory("moqDatabase", moqDatabase);
}());