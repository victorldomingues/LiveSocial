angular.module("liveSocial")
    .controller("navController", function ($scope, $http) {
        $http.get("/user")
        .then(function (response) {
            $scope.user = response.data.userAuthentication.details.name;
            $scope.authenticated = true;
            console.log($scope.user);
        });
        console.log('navController');
    });