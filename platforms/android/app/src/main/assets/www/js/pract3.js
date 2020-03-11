var module1 = angular.module('test1',[])
module1.controller('myController1',function($scope){
    alert("Hi")
    $scope.name1 = 'john';
    
    $scope.email = 'john@gmail.com'
    
}) 

// ng-show practice Controller 

// var module1 = angular.module('test1',[])
// module1.controller('myController1',function($scope){
//     $scope.show = "msg1"
//     $scope.toggle = function(){
//     $scope.show = $scope.show=='msg1'?'msg2':'msg1'
         
//     }
// }) 