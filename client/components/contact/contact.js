angular.module('app.contact', [])
    .controller('ContactController', ['$http', ContactController]);

function ContactController($http) {
    var controller = this;
    this.data = {};

    this.submit = function (form) {
        if (form.$valid) {

            $http.post('/api/sendMessage', this.data)
                .success(function () {
                    // TODO success message
                    controller.data.message = null;
                })
                .error(function () {

                })

        }
    }

}