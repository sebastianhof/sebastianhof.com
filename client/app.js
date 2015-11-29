angular.module('app', ['ngNewRouter', 'ngSanitize', 'ngTouch', 'pascalprecht.translate', 'ui.bootstrap', 'app.home', 'app.about', 'app.projects', 'app.contact', 'app.imprint', 'app.privacy'])
    .config(function ($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/locale-',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage('en');
    })
    .controller('AppController', ['$router', '$translate', '$rootScope', AppController])
    .directive('viewLoaded', function() {
        return {
            link: function(scope, elem) {
                sr.init();
            }
        }
    });

AppController.$routeConfig = [
    {path: '/', component: 'home'},
    {path: '/about', component: 'about'},
    {path: '/projects', component: 'projects'},
    {path: '/contact', component: 'contact'},
    {path: '/imprint', component: 'imprint'},
    {path: '/privacy', component: 'privacy'}
];
function AppController($router, $translate, $rootScope) {

    this.currentLang = 'EN';

    this.selectLang = function (lang) {
        this.currentLang = lang;
        if (lang == 'DE') $translate.use('de');
        else if (lang == 'CN') $translate.use('zh-CN');
        else $translate.use('en');
    };

    this.toggleMobileNav = function() {
        $('body').toggleClass('mobile-nav-open');
    }

}



