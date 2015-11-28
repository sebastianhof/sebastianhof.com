angular.module('app.contact', [])
    .controller('ContactController', ['$http', '$timeout', ContactController]);

function ContactController($http, $timeout) {
    var controller = this;
    this.data = {};
    this.error = false;
    this.success = false;


    this.submit = function (form) {
        if (form.$valid) {

            $http.post('/api/sendMessage', this.data)
                .success(function () {
                    controller.data.name = null;
                    controller.data.email = null;
                    controller.data.message = null;
                    controller.error = false;
                    controller.success = true;
                    $timeout(function() {
                        controller.success = false;
                    }, 5000);
                })
                .error(function (response, status) {
                    controller.error = true;
                    controller.success = false;
                    $timeout(function() {
                        controller.error = false;
                    }, 5000)
                });
        }
    };

}