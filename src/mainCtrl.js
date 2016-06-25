aT.controller('mainCtrl', function($scope, mainService) {
        
    mainService.getProductsData().then(function(response) {
        $scope.products = response;
        console.log(response);
    });
    
    
        
    console.log($scope.products);
});