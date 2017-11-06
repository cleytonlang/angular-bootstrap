app.controller('home', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
});