angular.module('main', [])

.factory('dataAPI', ['$http', function($http) {
    var api = {};

    api.getAllVideos = function(cb) {
        $http.get('/video').success(function(res){
           cb(res.data); 
        });
    };

    return api;    
}])

.controller('VideoController', ['$scope','dataAPI', function($scope, dataAPI) {
    $scope.data = [];
    $scope.current = [];
    $scope.page = 0;
    $scope.pageSize = 4;

    dataAPI.getAllVideos(function(result) {
        $scope.data = result;
        $scope.page = 0;
        $scope.current = $scope.data.slice(0, $scope.pageSize);
    });

    $scope.refresh = function() {
      $scope.page += 1;
      var start = $scope.page * $scope.pageSize;
      $scope.current = $scope.data.slice(start, start + $scope.pageSize);
      if (start + $scope.pageSize >= $scope.data.length) {
          $scope.page = -1;
      }
    };
}]);
