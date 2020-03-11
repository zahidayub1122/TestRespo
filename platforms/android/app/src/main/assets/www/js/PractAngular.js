var mymodule = angular.module("pu",['ngRoute'])
mymodule.config(function($routeProvider) {
    
    $routeProvider
    .when("/", {
      templateUrl : 'views/index1.html',
      controller  : 'demo'
    })
    .when("/red", {
         
      templateUrl : 'views/red.html',
      controller  : 'Rdemo'
    })
    .when("/green", {
        
      templateUrl : 'green.html',
      controller  : 'Gdemo'
    })
    .when("/blue", {
         
      templateUrl : "blue.html"
    });
  })
  mymodule.controller('demo',function($scope){
    
    $scope.Home_message = "This is Home page"
      
  })

  mymodule.controller('Rdemo',function($scope){
    
    $scope.red_message = "This is Red page"
})

mymodule.controller('Gdemo',function($scope){
    $scope.green_message = "This is Green page"
})

mymodule.controller ("Test",function($scope)
{
  alert("Hi-test controller")
  $scope.Php = function (){
     $scope.message = "PHP"
  }
 })

.controller("Test",function($scope){
  $scope.React = function(){
     $scope.message = "React Function"
  }
})
.controller("Js",function(){
  $scope.Js = function (){
    $scope.message = "This is Js function "
  }
})
.controller ("Test",function($scope){
  $scope.Jquery = function(){
    $scope.message =  "This is Jquery funciton "

  }
 
})






 // mymodule.controller ("myController",function($scope,$http,$log)
// {
//     $http({
//         method :'Get',
//         url :'http://jsonplaceholder.typicode.com/posts'
//     })
//     .then(function(response)
//     {
//         console.log(response)
//         $scope.lhr = response.data
//        // $log.info(response)
//     },
//     function(reason){
//         $scope.error = reason.data;
//         $log.info(reason)
        
//     }
    
//     )
     
// })
