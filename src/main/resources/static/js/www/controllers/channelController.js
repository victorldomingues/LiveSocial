angular.module("liveSocial")
	.controller("channelController", function ($scope, $http, $twitterApi, Api, $routeParams, localStorageService) {
		$twitterApi.configure("utYdEzSkzc7ZAQnJdPhbBpRvw", "2pXAfrqgjP0nh6btwkovLVKwrAMAfysCLOHHXZLhxdoBJGAQ16", "SK7L6SDTPwi0XdI4XQQWgU3qRYu57RQUkkFU8vgr5lms5");

		var channelId = $routeParams.id;

		var ApiService = {
			Channel: {
				list: function () {
					var channelsString = localStorageService.get("channels");
					if (channelsString == undefined)
						return [];
					var channels = JSON.parse(channelsString);
					return channels;
				},
				get: function (id) {
					var channels = Channel.list();
					var channel = channels.filter(function (item) {
						return item.id == id;
					});
					return channel;
				},
				save: function (channel) {
					var channelsString = localStorageService.get("channels");
					if (channelsString != undefined) {
						var channels = JSON.parse(channelsString);
						if (channels == undefined) {
							return localStorageService.set("channels", JSON.stringify([channel]));
						}
						channels.push(channel);
						return localStorageService.set("channels", JSON.stringify(channels));
					} else {
						return localStorageService.set("channels", JSON.stringify([channel]));
					}
				}
			}
		}


		$scope.getChannel = function () {
			$scoe.channel = ApiService.Channel.get(channelId);
		};

		$scope.isBusy = true;
		$http.get("/user")
			.then(function (response) {
				$scope.user = response.data.userAuthentication.details.name;
				$scope.authenticated = true;
				$scope.isBusy = false;
				$scope.getChannel();
				$scope.channel.name = $scope.user;
			});

		$scope.channel = {
			hashtag: "",
			tweets: []
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
				$scope.tweets = data;
				console.log('success');
			}, function (error) {
				console.log('error');
				console.log(error.data);
			});
		}

		$scope.addChannel = function () {
			var channels = ApiService.Channel.list();
			$scope.channel.id = channels.length;
			$scope.channel.name = '# ' + $scope.channel.id + ' | ' + $scope.user;
			$scope.channel.share = "http://localhost:8080/#!/channel/" + $scope.channel.id;
			$scope.channel.date = new Date(); 
			ApiService.Channel.save($scope.channel);

		};


		$scope.changeTweet = function (tweet) {
			$scope.channel.tweets.push(tweet);
		}


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