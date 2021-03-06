(function() {
  'use strict';

  angular.module('App.Common')
  .controller('CommonCtrl', [
    '$scope',
    '$ionicModal',
    '$timeout',
    '$state',
    'AppConfig',
    'Api',
    'Helpers',
    commonCtrl
  ]);

  function commonCtrl($scope, $ionicModal, $timeout, $state, AppConfig, Api, Helpers) {
    $scope.commonArray = [4, 5, 6];
    console.log('Common Controller');

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  }

  module.exports = angular.module('App.Common');
})();