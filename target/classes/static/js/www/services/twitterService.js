angular.module("liveSocial")
    .factory('Api', ['$resource', function ($resource) {
        return {
            Twitter: $resource('/js/www/tweets.json?q=:id', {
                id: '@id'
            })
        };
    }]);