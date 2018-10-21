var app = angular.module('employeeManager',[]);
app.directive('validEmail',function(){
    return{
        require: 'ngModel',
        link
    }
})