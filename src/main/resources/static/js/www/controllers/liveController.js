angular.module("liveSocial")
    .controller("liveController", function ($scope, $interval, $timeout, ApiService, $routeParams) {
        var liveId = $routeParams.id;
        $scope.live = {
            type: 'youtube',
            showTeet: false
        }

        $scope.users = [];

        $scope.tweet = {
            user: "@victorldomingues",
            message: "Este é o meu tweet",
            show: false
        }

        $scope.tweetsCount = 0;

        $scope.getTweet = function () {
            $scope.tweet = $scope.live.tweets[$scope.tweetsCount];
            $scope.tweet.show = true;
            $timeout($scope.closeTweet, 10000);
        }
        $scope.closeTweet = function () {
            $scope.tweet.show = false;
            $scope.tweetsCount++;
        }
        $scope.getTweetInterval = function () {
            $interval($scope.getTweet, 15000);
        }

        $scope.getTweetInterval();


        $scope.getChannel = function () {
            $scope.live = ApiService.Channel.get(liveId)[0];
        };

        $scope.getChannel();

    });