app.controller('login', function($scope, $rootScope, $location) {
    $scope.login = function(user) {
        console.log(user);
        $scope.showdata = true;
    }
});