angular.module("liveSocial")
    .controller("signController", function ($scope, $http) {
        $http.get("/user").then(function (response) {
            $scope.user = response.data.userAuthentication.details.name;
            $scope.authenticated = true;
        });
    });