/* Services */

var FmServices = angular.module('FmServices', ['ngResource']);

FmServices.factory('fm', ['$resource',
  function($resource){
    return $resource('datail/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
