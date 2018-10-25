(function () {

  var app = angular.module("employeeManager", ["ui.router", "ngSanitize", "ui.select", 'ui.bootstrap']);

  app.config(function ($stateProvider) {
    var states = [{
        name: 'table',
        url: '/',
        template: '<employee-table></employee=table>'
      },
      {
        name: 'home',
        url: '/addedFooter',
        template: '<page-footer></page-footer>'
      },
      {
        name: 'details',
        url: '/{employeeName}',
        resolve: {
          employeeName: function($stateParams){
            return $stateParams.employeeName;
          }
        },
        template: '<employee-details employee-name="$resolve.employeeName"></employee-details>',
      }
    ];
    states.forEach(function (state) {
      $stateProvider.state(state);
    })

  });

}());