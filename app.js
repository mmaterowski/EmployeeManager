(function () {

  var app = angular.module("employeeManager", ["ui.router", "ngSanitize", "ui.select", 'ui.bootstrap']);

  app.config(function ($stateProvider) {
    var states = [{
        name: 'table',
        url: '',
        template: '<employee-table></employee=table>'
      },
      {
        name: 'home',
        url: '/addedFooter',
        template: '<page-footer></page-footer>'
      },
      {
        name: 'details',
        url: '/employeeDetails',
        template: '<employee-details></employee-details'
      }
    ];
    states.forEach(function (state) {
      $stateProvider.state(state);
    })

  });
  // app.config(function($routeProvider){
  //   $routeProvider
  //     .when("/main",{
  //       templateUrl: "Templates/main.html",
  //       controller: "MainController"
  //     })
  //     .when("/contact",{
  //       templateUrl: "Templates/contact.html",
  //       controller: "EmployeeController"
  //     })
  //     .otherwise({redirectTo:"/main"});
  // });
}());