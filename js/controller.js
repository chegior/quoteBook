angular.module('myApp').controller('myCtrl',function($scope,mySvc){
  $scope.print = mySvc.test;

});
