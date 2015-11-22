var FmApp = angular.module('FamilyApp', ['ngRoute','FmControllers','ngAnimate']);

FmApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/index',{
			templateUrl : 'template/page01.html',
			controller : 'listCtrl'
		})
		.when('/top',{
			templateUrl : 'template/top.html',
			controller : 'listCtrl'
		})
		.when('/baoming',{
			templateUrl : 'template/baoming.html'
		})
		.when('/prize',{
			templateUrl : 'template/prize.html'
		})
		.when('/detail/:id',{
			templateUrl : 'template/detail.html',
			controller : 'detailCtrl'
		})
		.otherwise({
			redirectTo : '/index'
		});
}])
