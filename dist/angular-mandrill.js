! function() {
    "use strict";
    angular.module("angular-mandrill", [])
}();;
! function() {
    "use strict";
    angular.module("angular-mandrill").constant("EVENTS", {}).constant("URLS", { base: "" })
}();;
! function() {
    "use strict";
    angular.module("angular-mandrill").provider("Mandrill", function() {
        var apiKey, defaults = {},
            baseUrl = "https://mandrillapp.com/api/1.0/";
        return {
            setApiKey: function(value) { apiKey = value },
            setDefaults: function(value) { defaults = value },
            $get: ["$http", function($http) {
                var mandrill = {},
                    config = {},
                    data = { key: apiKey };
                return config.messages = {}, mandrill.messages = {}, mandrill.messages.send = function(userData) {
                    var sendData = angular.extend({}, data, userData);
                    return $http.post(baseUrl + "messages/send.json", sendData)
                }, mandrill.messages.sendTemplate = function(userData) {
                    var sendData = angular.extend({}, data, userData);
                    // return $http.post(baseUrl + 'messages/send-template.json', sendData)

                    // return $http({
                    //     method: "POST",
                    //     url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
                    //     dataType: "json",
                    //     ContentType: "application/json;charset=utf-8",
                    //     data: sendData,
                    //     crossDomain: true
                    // }).success(function(data, status, headers, config) {
                    //     console.log('successful email send.');
                    //     console.log('status: ' + status);
                    //     console.log('data: ' + data);
                    //     console.log('headers: ' + headers);
                    //     console.log('config: ' + config);
                    // }).error(function(data, status, headers, config) {
                    //     console.log('error sending email.');
                    //     console.log('status: ' + status, config);
                    // });

                    return $.ajax({
                        method: "POST",
                        url: "https://mandrillapp.com/api/1.0/messages/send-template.json",
                        dataType: "json",
                        ContentType: "application/json;charset=utf-8",
                        data: sendData,
                        crossDomain: true,
                        success: function(data, status, headers, config) {
                            console.log('successful email send.');
                            console.log('status: ' + status);
                            console.log('data: ' + data);
                            console.log('headers: ' + headers);
                            console.log('config: ' + config);
                        },
                        error: function(data, status, headers, config) {
                            console.log('error in sending email.');
                            console.log('status: ' + status);
                            console.log('data: ' + data);
                            console.log('headers: ' + headers);
                            console.log('config: ' + config);
                        }
                    });
                }, mandrill
            }]
        }
    })
}();;
! function() {
    "use strict";
    angular.module("angular-mandrill").run(function() {})
}();