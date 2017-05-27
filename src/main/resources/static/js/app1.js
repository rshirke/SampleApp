angular.module('demo', [])
.controller('Hello', function($scope, $http) {
	
	$scope.loadData = function(){
        $http.get('http://localhost:8082/samples.json').then(function(data){
             $scope.samples = data;
        })
	}
	
	$scope.loadData();
	
    
})