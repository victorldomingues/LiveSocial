angular.module("liveSocial")
	.controller("channelController", function ($scope, $http, $twitterApi, Api, ApiService, $routeParams) {
		$twitterApi.configure("utYdEzSkzc7ZAQnJdPhbBpRvw", "2pXAfrqgjP0nh6btwkovLVKwrAMAfysCLOHHXZLhxdoBJGAQ16", "SK7L6SDTPwi0XdI4XQQWgU3qRYu57RQUkkFU8vgr5lms5");

		var channelId = $routeParams.id;
		$scope.isBusy = true;
		$http.get("/user")
			.then(function (response) {
				$scope.user = response.data.userAuthentication.details.name;
				$scope.authenticated = true;
				$scope.isBusy = false;
				$scope.channel.name = $scope.user;
			});

		$scope.channel = {
			hashtag: ""
		}

		$scope.timmers = [{
				id: 1,
				name: "5 Segundos",
				value: 5
			},
			{
				id: 2,
				name: "8 Segundos",
				value: 8
			},
			{
				id: 3,
				name: "10 Segundos",
				value: 10
			}
		];

		$scope.getTweets = function (event) {

			if (event.which === 13) {
				$scope.callTwitterApi();
			}
		}

		$scope.callTwitterApi = function () {
			Api.Twitter.query({
				id: $scope.channel.hashtag
			}, function (data) {
				console.log(data);
				$scope.tweets = data.data;
				console.log('success');
			}, function (error) {
				console.log('error');
				console.log(error.data);
			});
		}

		$scope.addChannel = function () {
			var channels = ApiService.Channel.list();
			$scope.channel.id = channels.length;
			ApiService.Channel.save($scope.channel);
		};

		$scope.getChannel = function () {
			$scoe.channel = ApiService.Channel.get(channelId);
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