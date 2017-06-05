angular.module("liveSocial")
    .controller("homeController", function ($scope, $http, $location) {

        $http.get("/user").then(function (response) {
            $scope.user = response.userAuthentication.details.name;
            $scope.authenticated = true;
        });

        $scope.logout = function () {
            $http.post('logout', {}).then(function () {
                $scope.authenticated = false;
                $location.path("/");
            });
        };

        burgerMenu();
        owlCrouselFeatureSlide();
        clickMenu();
        windowScroll();
        navigationSection();
        aboutWayPoint();
        teamWayPoint();
        servicesWayPoint();
        featuresWayPoint();
        testimonialsWayPoint();
        pricingWayPoint();
        pressWayPoint();


    });