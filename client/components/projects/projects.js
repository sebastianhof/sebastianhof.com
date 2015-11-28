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
                        <img ng-src="{{::image}}" alt=""/>\
                        <div class="item-hover bg-dark dark">\
                            <div class="item-hover-content">\
                                <a class="icon icon-sm icon-hover icon-circle icon-primary" ng-click="projectsItem.openModal()"><i class="fa fa-link"></i></a>\
                             </div>\
                        </div>\
                    </div>\
                    <div class="item-title">\
                        <div class="title">{{::title | translate }}</div>\
                        <span class="caption text-muted">{{::description | translate}}</span>\
                    </div>\
                </div>\
            ',
            controller: ['$scope', function($scope) {




            }],
            controllerAs: 'projectsItem'

        }
    });

