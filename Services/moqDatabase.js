(function () {

    var moqDatabase = function () {
    let index=10;

        var employees = [
            {
                id: 1,
                name: "Ora",
                surname: "Page",
                employedSince: "2015-12-26",
                vacationDays: 4,
                supervisorName: "Dave Adams"
            },
            {
                id: 2,
                name: "Antonio",
                surname: "Morris",
                employedSince: "2017-05-02",
                vacationDays: 5,
                supervisorName: "Dave Adams"
            },
            {
                id: 3,
                name: "Andre",
                surname: "Brewer",
                employedSince: "2017-03-12",
                vacationDays: 10,
                supervisorName: "Dave Adams"
            },
            {
                id: 4,
                name: "Paulette",
                surname: "Stewart",
                employedSince: "2015-12-26",
                vacationDays: 2,
                supervisorName: "Dave Adams"
            },
            {
                id: 5,
                name: "Dave",
                surname: "Adams",
                employedSince: "2015-10-05",
                vacationDays: 15,
                supervisorName: "Ora Page"
            },
            {
                id: 6,
                name: "Elisa",
                surname: "Santos",
                employedSince: "2015-05-19",
                vacationDays: 15,
                supervisorName: "Ora Page"
            }
        ];

        var getEmployees = function () {
            return employees;
        };


        var addEmployee = function (employee) {
            employee.id = index;
            employees.push(employee);
            index++;
        };

        var updateEmployee = function(indexOfEmployee,employeeObj){
            employees[indexOfEmployee] = employeeObj;
            console.log(employees);

        }

        var deleteEmployee = function (employeeId) {
            var foundEmployee = employees.filter(function (employee) {
                return employee.id === employeeId;
            });
            var indexOfFoundEmployee = employees.indexOf(foundEmployee);
            employees.splice(indexOfFoundEmployee, 1);
        };

        var getEmployeeById = function(employeeId){
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].id === Number(employeeId)) {

                    return employees[i];
                }
            }
            return null;
        }

        var getEmployeeIndex = function(employeeId){
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].id === Number(employeeId)) {
                    return i;
                }
            }
            return null;
        }
        
        var getEmployeeCount = function(){
                return employees.length;
        }

        return {
            getEmployees: getEmployees,
            addEmployee: addEmployee,
            deleteEmployee: deleteEmployee,
            getEmployeeById : getEmployeeById,
            getEmployeeCount: getEmployeeCount,
            getEmployeeIndex: getEmployeeIndex,
            updateEmployee : updateEmployee
        };
    };
    var module = angular.module("employeeManager");
    module.factory("moqDatabase", moqDatabase);
}());