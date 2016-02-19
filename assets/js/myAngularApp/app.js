//console.info('Angular App init');
var myAngularApp = angular.module('myAngularApp', ['ngMaterial'], function() {});

myAngularApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

myAngularApp.controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];

function MyCtrl($scope) {
	$scope.name = 'Weslei Freitas';
}

// Post Controller - START
myAngularApp.controller('PostCtrl', PostCtrl);

PostCtrl.$inject = ['$scope'];

function PostCtrl($scope) {

	$scope.jekyllAngular = {
		example: '[[name]]',
		colchetes: '[[colchetes]]'
	};
}
// Post Controller - END

//console.info('Angular App  done');