aT.service('mainService', function($http, $q) {
    
    this.getProductsData = function() {
        var defer = $q.defer();
        $http({
            method: "GET",
            url: "https://dev-assessment.firebaseio.com/products.json"
        }).then(function(response) {
            defer.resolve(response.data);
        })
        return defer.promise;
    };
    
});