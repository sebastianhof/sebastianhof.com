angular.module('app.about', [])
    .controller('AboutController', [function () {

    }])

    .directive('aboutTimelineEvent', function () {
        return {
            scope: {
                timespan: '@',
                title: '@',
                location: '@',
                description: '@',
                descriptions: '='
            },
            template: '\
                <div class="timeline-event te-primary">\
                    <span class="event-date">{{ timespan | translate}}</span>\
                    <span class="event-name">{{ title | translate}}</span>\
                    <span class="event-location" ng-if="location"><i class="fa fa-map-marker"></i>&nbsp;{{ location | translate}}</span>\
                    <span class="event-description" ng-if="description">{{ description | translate}}</span>\
                    <ul ng-if="descriptions">\
                        <li class="event-description" ng-repeat="description in descriptions">{{ description | translate}}</li>\
                    </ul>\
                </div>\
            ',
            replace: true
        }
    })

    .directive('aboutSpeciality', function () {
        return {
            scope: {
                icon: '@',
                title: '@',
                description: '@'
            },
            template: '\
            <div class="speciality">\
                <span class="speciality-icon"><i class="text-muted-2x fa {{::icon}}"></i></span>\
                <div class="speciality-content">\
                    <h5 class="margin-b-0">{{ title | translate }}</h5>\
                    <p class="speciaity-description">{{ description | translate }}</p>\
                </div>\
            </div>\
          '
        }
    })

    .directive('aboutSkill', function () {
        return {
            scope: {
                value: '@',
                title: '@',
                class: '@'
            },
            template: '\
            <div class="skill">\
                <div class="progress progress-animated">\
                    <div class="progress-bar progress-bar-{{::(class || \'primary\')}}" role="progressbar" aria-valuenow="{{::value}}"\
                        aria-valuemin="0" aria-valuemax="100" style="width: {{::value}}%;">\
                        <span></span>\
                    </div>\
                </div>\
                <strong>{{ title | translate }}</strong>\
            </div>'
        }
    })

    .directive('aboutInterest', function () {
        return {
            scope: {
                icon: '@',
                title: '@'
            },
            template: '\
                <div class="icon-box text-center">\
                    <span class="icon icon-sm icon-circle icon-primary icon-filled">\
                        <i class="fa {{::icon}}"></i>\
                    </span>\
                    <span class="title">{{ title | translate }}</span>\
                </div>\
            '
        }
    });

