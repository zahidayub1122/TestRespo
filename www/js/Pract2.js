
var Md = angular.module("t2", ['ngRoute'])
Md.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/login.html',
            controller: 'demo'

        })
        .when("/dashboard", {
            resolve: {
                "check": function($location, $rootScope) {
                    if (!$rootScope.logged) {
                        $location.path('/');
                    } else {
                        templateUrl: 'dashboard.html'
                    }
                }
            }
        })
})
Md.controller("demo", function($scope, $location, $rootScope) {
    $scope.submit = function() {
            var name = $scope.userName
            var pass = $scope.userPass
            if ($scope.userName == 'admin' && $scope.userPass == 'admin') {
                $rootScope.logged = true
                $location.path('/dashboard')
            } else {
                alert("Wrong Stuff")
            }
        }
        // Range Base loop practice 
    var range = 10;
    $scope.myRange = []
    for (i = 0; i < range; i++) {
        myRange.push(i)

        //wrong - appproach - it will not accessible out the loop
        //$scope.count =  $scope.myRange
    }
    //Right - appproach - it will accessible out the loop
    $scope.count = $scope.myRange
})