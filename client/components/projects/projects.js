angular.module('app.projects', [])
    .controller('ProjectsController', [function () {

    }])
    .directive('projectsItem', function () {
        return {
            replace: true,
            scope: {
                url: '@',
                image: '@',
                title: '@',
                description: '@'
            },
            template: '\
                 <div class="gallery-item">\
                    <div class="item-photo">\
                        <img src="{{::image}}" alt="" class="animated visible infinite pulse zooming"/>\
                        <div class="item-hover bg-dark dark">\
                            <div class="item-hover-content">\
                                <a class="icon icon-sm icon-hover icon-circle icon-primary" ng-click="projectsItem.openModal()"><i class="fa fa-external-link"></i></a>\
                             </div>\
                        </div>\
                    </div>\
                    <div class="item-title">\
                        <div class="title" data-sr="enter bottom, move 32px">{{::title | translate }}</div>\
                        <span class="caption text-muted">{{::description | translate}}</span>\
                    </div>\
                </div>\
            ',
            controller: ['$scope', '$uibModal', function($scope, $uibModal) {

                this.openModal = function() {

                    $uibModal.open({
                        templateUrl: $scope.url,
                        controller: ['$uibModalInstance', function($uibModalInstance) {

                            this.close = function() {
                                $uibModalInstance.dismiss();
                            }

                        }],
                        controllerAs: 'dialog'
                    })

                };

            }],
            controllerAs: 'projectsItem'

        }
    });

