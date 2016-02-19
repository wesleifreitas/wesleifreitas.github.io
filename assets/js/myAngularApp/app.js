//console.info('Angular App init');
var myAngularApp = angular.module('myAngularApp', ['ngMaterial'], function() {});

myAngularApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

myAngularApp.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope', '$mdDialog'];

function MyCtrl($scope, $mdDialog) {
	$scope.name = 'Weslei Freitas';
}
//console.info('Angular App  done');