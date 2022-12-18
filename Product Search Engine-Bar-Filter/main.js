var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
  $scope.products = [
    "T-Shirt",
    "Shirt",
    "Laptop",
    "Camera",
    "TV",
    "SmartPhone",
    "AirPods"
  ];
});