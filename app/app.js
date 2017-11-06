var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider.when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'home',
    })

    .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'home',
    })

    .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'login',
    })

    // if it is not any of these, redirect to route '/'
    .otherwise({ redirectTo: '/' });
});

app.run(['$rootScope', function($rootScope) {

}]);