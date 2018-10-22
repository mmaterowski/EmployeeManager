app.directive('verifydate', function (){ 
    return {
       require: 'ngModel',
       link: function(scope, elem, attr, ngModel) {
           var verifydate = attr.blacklist.split(',');
 
           //For DOM -> model validation
           ngModel.$parsers.unshift(function(value) {
              var valid = verifydate.indexOf(value) === -1;
              ngModel.$setValidity('blacklist', valid);
              return valid ? value : undefined;
           });
 
           //For model -> DOM validation
           ngModel.$formatters.unshift(function(value) {
              ngModel.$setValidity('blacklist', verifydate.indexOf(value) === -1);
              return value;
           });
       }
    };
 });

 <form name="myForm" ng-submit="doSomething()">
   <input type="text" name="fruitName" ng-model="data.fruitName" blacklist="coconuts,bananas,pears" required/>
   <span ng-show="myForm.fruitName.$error.blacklist">
      The phrase "{{data.fruitName}}" is blacklisted</span>
   <span ng-show="myForm.fruitName.$error.required">required</span>
   <button type="submit" ng-disabled="myForm.$invalid">Submit</button>
</form>