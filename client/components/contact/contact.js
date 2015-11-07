angular.module('app.contact', [])
    .controller('ContactController', ['$http', ContactController]);

function ContactController($http) {
    var controller = this;
    this.data = {};
    this.error = false;

    this.submit = function (form) {
        if (form.$valid) {

            $http.post('/api/sendMessage', this.data)
                .success(function () {
                    controller.data.message = null;
                    controller.error = false;
                })
                .error(function (response, status) {
                    controller.error = true;
                })

        }
    }

}