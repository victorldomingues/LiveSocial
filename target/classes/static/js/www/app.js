/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this templateUrl file, choose Tools | templateUrls
 * and open the templateUrl in the editor.
 */
var app = angular.module("liveSocial", ["ngRoute", "ngResource", "ngTwitter", "LocalStorageModule"]);

app.config(function ($routeProvider, $resourceProvider, $qProvider, localStorageServiceProvider) {
    // $twitterApi.configure("utYdEzSkzc7ZAQnJdPhbBpRvw", "2pXAfrqgjP0nh6btwkovLVKwrAMAfysCLOHHXZLhxdoBJGAQ16", "1421873618-OOm5BbkpDp1PrXq1yAbhR9Qdc2Wxs6He02qqFiC");
    // console.log($twitterApi);
    $routeProvider
        .when("/", {
            templateUrl: "/js/www/views/home/index.html",
            controller: 'homeController'
        })
        .when("/login", {
            templateUrl: "/js/www/views/sign/in.html",
            controller: 'signController'
        })
        .when("/channel", {
            templateUrl: "/js/www/views/channel/list.html",
            controller: 'channelListController'
        })
        .when("/channel/new", {
            templateUrl: "/js/www/views/channel/new.html",
            controller: 'channelController'
        })
        .when("/channel/:id", {
            templateUrl: "/js/www/views/channel/new.html",
            controller: 'channelController'
        })
        .when("/live", {
            templateUrl: "/js/www/views/live/list.html",
            controller: 'liveListController'
        })
        .when("/live/:id", {
            templateUrl: "/js/www/views/live/watch.html",
            controller: 'liveController'
        });

    $qProvider.errorOnUnhandledRejections(false);

    localStorageServiceProvider
        .setPrefix('liveSocial')
        .setStorageType('sessionStorage')
        .setNotify(true, true)
});