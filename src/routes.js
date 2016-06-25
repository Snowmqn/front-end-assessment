aT.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'mainCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller:'mainCtrl'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: 'views/blog.html',
            controller:'mainCrtl'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'views/shop.html',
            controller: 'mainCtrl'
        })
        
        $urlRouterProvider.otherwise('/home')
});