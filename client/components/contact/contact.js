angular.module('app.contact', [])
    .controller('ContactController', ['$http', '$timeout', ContactController]);

function ContactController($http, $timeout) {
    var controller = this;
    this.data = {};
    this.error = false;
    this.success = false;

    this.toggleContactForm = function () {
        var $messenger = $('#messenger'),
            $messengerBox = $('#messenger-box');

        if ($messenger.hasClass('active')) {
            $messengerBox.find('.messenger-box-content').fadeOut();
            $messenger.fadeOut(300).removeClass('active');
        } else {
            $messenger.fadeIn(300, function () {
                $messengerBox.find('.messenger-box-content').fadeIn(400);
            }).addClass('active');
        }
    };

    this.submit = function (form) {
        if (form.$valid) {

            $http.post('/api/sendMessage', this.data)
                .success(function () {
                    controller.data.name = null;
                    controller.data.email = null;
                    controller.data.message = null;
                    controller.error = false;
                    controller.success = true;
                    $timeout(function () {
                        controller.success = false;
                    }, 5000);
                })
                .error(function (response, status) {
                    controller.error = true;
                    controller.success = false;
                    $timeout(function () {
                        controller.error = false;
                    }, 5000)
                });
        }
    };

}