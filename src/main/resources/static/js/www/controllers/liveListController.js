angular.module("liveSocial")
	.controller("liveListController", function ($scope, ApiService) {

		$scope.getChannels = function () {
			$scope.lives = ApiService.Channel.list();
		}

		$scope.getChannels ();

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