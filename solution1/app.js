(function () {
    'use strict'; //IIFE
    
    //adding module and controller
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    //protecting from minifacation
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
      //declaring scope variables
      $scope.btn = "Check If Too Much";
      $scope.placeholder="list comma separated dishes you usually have for lunch";
      $scope.textfield='';
      //$scope.msg='';

      //calling calculatelunch function when button is pressed
      $scope.textbox= function(){
        calculatelunch($scope.textfield)  
      };

    //function to 'calculate' the message
    function calculatelunch(string) {
      
        if (string === "") {
          $scope.msg = "Please enter data first";
        } else if (string.split(',').length<=3) {
          $scope.msg = "Enjoy!";
        } else {
          $scope.msg  = "Too Much!";
        }
          //console.log(string.split(',').length); ---log for error checking
          return $scope.msg  
    }

}})();

