(function () {

  var app = angular.module("employeeManager", ["ui.router", "ngSanitize", "ui.select", 'ui.bootstrap','ngRoute']);

  app.config(function ($stateProvider, $routeProvider) {
    // var states = [{
    //     name: 'table',
    //     url: '/',
    //     template: '<employee-table></employee=table>'
    //   },
    //   {
    //     name: 'edit',
    //     url: '/edit/{employeeId}',
    //     resolve: {
    //       employeeId: function ($stateParams) {
    //         return $stateParams.employeeId;
    //       }
    //     }
    //   },
    //   {
    //     name: 'details',
    //     url: '/{employeeName}',
    //     resolve: {
    //       employeeName: function ($stateParams) {
    //         return $stateParams.employeeName;
    //       }
    //     },
    //     template: '<employee-details employee-name="$resolve.employeeName"></employee-details>',
    //   }
    // ];

    $routeProvider.when('/edit/:employeeId', {controller: 'EmployeeController' });


    // states.forEach(function (state) {
    //   $stateProvider.state(state);
    // })
  });

}());