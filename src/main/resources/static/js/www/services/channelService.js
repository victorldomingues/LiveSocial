angular.module("liveSocial")
    .factory('ApiService', ['localStorageService', function (localStorageService) {
        var Channel = {
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
        return {
            Channel: Channel
        }
    }]);