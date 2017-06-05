angular.module("liveSocial")
	.controller("channelListController", function ($scope, ApiService) {
		$scope.getChannels = function () {
			$scope.channels = ApiService.Channel.list();
		}

		$scope.getChannels();
		
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