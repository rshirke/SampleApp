 var $received_data;

    var test = angular.module("myapp", []);
      
        test.controller("MyController", function($scope, $http) {
            $scope.myData = {};
            
            $scope.myData.doClick = function() {

                $http.get("http://localhost:8082/samples.json").
                success(function(data, status, headers, config) {
                    console.log("ok")
                    $scope.req_data = data;
                }).
                error(function(data, status, headers, config) {
                    alert("error?");
                });
            };


        });