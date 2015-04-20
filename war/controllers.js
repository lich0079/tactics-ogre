var phonecatApp = angular.module('phonecatApp', ['ngRoute']);


phonecatApp.config(['$routeProvider','$compileProvider',
  function($routeProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    
    $routeProvider.
      when('/photos/:pageIndex', {
        templateUrl: 'details.html',
        controller: 'PhoneListCtrl'
      }).
      when('/photos/:pageIndex/:pageSize', {
        templateUrl: 'details.html',
        controller: 'PhoneListCtrl'
      }).
      otherwise({
        redirectTo: '/photos/1/6'
      });
  }]);

phonecatApp.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });

phonecatApp.controller('PhoneListCtrl', ['$scope','$routeParams', '$route','$location',
  function($scope, $routeParams, $route, $location) {

    $scope.imgsdata = imgsdata;

    $scope.pageindex = $routeParams.pageIndex;
    $scope.pageSize = $routeParams.pageSize;
    $scope.belles;
    $scope.mainBelleUrl;    
    $scope.getPage =function(pageNum) {
         var currentIndex = (pageNum-1)*$scope.pageSize;
         var arr = [];
            for(var i=0; i<$scope.pageSize; i++) {
                if(currentIndex+i < imgsdata.length) {
                    arr.push(imgsdata[currentIndex+i]);
                }
            }

            $scope.belles = arr;
            $scope.mainBelleUrl = arr[0].lsrc;
     }

     if($scope.pageindex<1){
        $scope.pageindex=1;
     }else if($scope.pageindex > parseInt(imgsdata.length/$scope.pageSize)){
        $scope.pageindex = parseInt(imgsdata.length/$scope.pageSize);
     }
    $scope.getPage($scope.pageindex);
    
    $scope.setBelleImage = function(imageUrl) {
      $scope.mainBelleUrl = imageUrl;
    };

    function isPageIndexValid(pageNum){
        if(pageNum<1 || pageNum*$scope.pageSize >= imgsdata.length){
            return false;
        }else{
            return true;
        }
    }

    $scope.gotoPage = function(pageNum) {
        if(isPageIndexValid(pageNum)){
            $location.path('/photos/'+pageNum+'/'+$scope.pageSize);
            // $scope.getPage(pageNum);
            // $scope.pageindex = pageNum;
        }else{
             $location.path('/photos/'+parseInt(imgsdata.length/$scope.pageSize)+'/'+$scope.pageSize);
            // $scope.pageindex=parseInt(imgsdata.length/$scope.pageSize);
            // $scope.getPage($scope.pageindex);
        }
    };

    $scope.parseInt = function(num){
        return parseInt(num);
    }
  }]);