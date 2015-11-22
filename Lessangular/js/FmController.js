var FmControllers = angular.module("FmControllers",[]);
FmControllers.controller('listCtrl',['$scope','$http', '$filter','$location',function($scope,$http,$filter,$location){
	$scope.sVal = "";
	var oldData = null;
	$scope.listData = null;
	//获取list的数据
	$http({
		method : 'GET',
		url : 'json/list.json'
	}).success(function(data){
		$scope.listData = data;
		oldData = data;
	})
	//点击搜索  过滤器
	$scope.searchFn = function(){
		$scope.listData = $filter("filter")(oldData, $scope.sVal);
		console.log($scope.listData);
	}
	$scope.sortFn = function(_str){
		$scope.listData = $filter("orderBy")(oldData, _str, true);
		
		console.log(_str);
	}
	//给图片挂载连接
	$scope.$location = $location;
}]);

FmControllers.controller('detailCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	//小数据的交互用$http,大型的多数据交互的用$resource插件  吊炸天（好吧 主要是我不会后台）
	var _id = $routeParams.id;
	$scope.detailData = null;
	$http({
		method : 'GET',
		url : 'json/listDetail.json'
	}).success(function(data){
		$scope.detailData = data[_id];
		console.log($scope.detailData);
	});
}]);
//
//FmControllers.controller('tabCtrl',['$scope','$http', '$filter','$location',function($scope,$http,$filter,$location){
//	$scope.sVal = "";
//	var oldData = null;
//	$scope.listData = null;
//	//获取list的数据
//	$http({
//		method : 'GET',
//		url : 'json/list.json'
//	}).success(function(data){
//		$scope.listData = data;
//		oldData = data;
//	})
//	//点击搜索  过滤器
//	$scope.searchFn = function(){
//		$scope.listData = $filter("filter")(oldData, $scope.sVal);
//		console.log($scope.listData);
//	}
//	$scope.sortFn = function(_str){
//		$scope.listData = $filter("orderBy")(oldData, _str, true);
//		
//		console.log(_str);
//	}
//	//给图片挂载连接
//	$scope.$location = $location;
//}]);














