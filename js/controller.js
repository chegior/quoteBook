angular.module('myApp').controller('myCtrl',function($scope,mySvc){
  $scope.quotes = mySvc.getQuotes();

  $scope.deleteQuote =  function(textToDelete){
    mySvc.removeData(textToDelete);
  }

  $scope.addQuote = function(){
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    }
    if(mySvc.addData(newQuote)){
      $scope.newQuoteText='';
      $scope.newQuoteAuthor=''
    }
  }

});
