angular.module('app', ['ngNewRouter', 'ngSanitize', 'pascalprecht.translate', 'app.home', 'app.about', 'app.projects', 'app.contact'])
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            'ABOUT': 'About',
            'PROJECTS': 'Projects',
            'CONTACT': 'Contact',


            'HOME.NAME': 'Sebastian Hof',
            'HOME.JOB_TITLE': 'Software Engineer',
            'HOME.PLACE': 'Nuremberg, Germany',

            'DESIGN': 'Design',
            'DESIGN_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'DEVELOPMENT': 'Development',
            'DEVELOPMENT_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ANALYTICS': 'Analytics',
            'ANALYTICS_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'FRAMEWORKS_TECHNOLOGIES': 'Framework and Technologies',

            'JOB': 'Job',
            'EDUCATION': 'Education',
            'RESEARCH': 'Research',

            'ABOUT.JOB': 'Software Engineer and Architect',
            'ABOUT.JOB_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.EDUCATION': 'International Information Systems M.Sc.',
            'ABOUT.EDUCATION_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.RESEARCH': 'Process Analytics and Mining',
            'ABOUT.RESEARCH_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',

            'ABOUT.FITNESS': 'Fitness',
            'ABOUT.FITNESS_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.TRAVEL': 'Travel',
            'ABOUT.TRAVEL_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.COOKING': 'Cooking',
            'ABOUT.COOKING_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',

            'CV': 'Curriculum Vitae',

            'PROJECTS.CLIENT': 'Client',
            'PROJECTS.DATE': 'Date',
            'PROJECTS.SERVICE': 'Service',
            'PROJECTS.TECHNOLOGIES': 'Technologies',
            'PROJECTS.CLOSE': 'Close',

            'PROJECTS.INBITS': 'INBITS Platform',
            'PROJECTS.INBITS_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'PROJECTS.INBITS_CLIENT': 'INBITS GmbH',
            'PROJECTS.INBITS_DATE': 'Current',
            'PROJECTS.INBITS_SERVICE': 'Cloud platform development',
            'PROJECTS.INBITS_TECHNOLOGIES': 'MEAN Stack, Play, Apache Spark',

            'PROJECTS.COCAMA': 'Collaborative Case Management',
            'PROJECTS.COCAMA_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'PROJECTS.COCAMA_CLIENT': 'INBITS GmbH',
            'PROJECTS.COCAMA_DATE': '2012-2014',
            'PROJECTS.COCAMA_SERVICE': 'Web platform development',
            'PROJECTS.COCAMA_TECHNOLOGIES': 'Java EE, GWT, MySQL',

            'PROJECTS.SYMBIO': 'Symbio Web',
            'PROJECTS.SYMBIO_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'PROJECTS.SYMBIO_CLIENT': 'Ploetz + Zeller GmbH',
            'PROJECTS.SYMBIO_DATE': 'Current',
            'PROJECTS.SYMBIO_SERVICE': 'Web platform development',
            'PROJECTS.SYMBIO_TECHNOLOGIES': 'ASP.NET MVC, AngularJS',
            
            'PROJECTS.COUBR': 'Coubr',
            'PROJECTS.COUBR_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'PROJECTS.COUBR_CLIENT': 'Coubr',
            'PROJECTS.COUBR_DATE': '2014',
            'PROJECTS.COUBR_SERVICE': 'Cloud platform and mobile app development',
            'PROJECTS.COUBR_TECHNOLOGIES': 'MEAN Stack, iOS',

            'PROJECTS.HOMEPAGE': 'Homepage',
            'PROJECTS.HOMEPAGE_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'PROJECTS.HOMEPAGE_CLIENT': 'sebastianhof.com',
            'PROJECTS.HOMEPAGE_DATE': '2015',
            'PROJECTS.HOMEPAGE_SERVICE': 'Web page development',
            'PROJECTS.HOMEPAGE_TECHNOLOGIES': 'MEAN Stack',

            
            'CONTACT.NAME': 'Name',
            'CONTACT.NAME_TEXT': 'Please enter your name.',
            'CONTACT.EMAIL': 'Email address',
            'CONTACT.EMAIL_TEXT': 'Please enter your email address.',
            'CONTACT.MESSAGE': 'Message',
            'CONTACT.MESSAGE_TEXT': 'Please enter a message.',
            'CONTACT.SEND': 'Send'

        });
        $translateProvider.translations('de', {
            'ABOUT': 'Über mich',
            'PROJECTS': 'Projekte',
            'CONTACT': 'Kontakt',


            'HOME.NAME': 'Sebastian Hof',
            'HOME.JOB_TITLE': 'Software Engineer',
            'HOME.PLACE': 'Nürnberg',

            'DESIGN': 'Design',
            'DEVELOPMENT': 'Entwicklung',
            'ANALYTICS': 'Analytics',


        });
        $translateProvider.translations('cn', {
            'ABOUT': '————',
            'PROJECTS': '————',
            'CONTACT': '————',


            'HOME.NAME': 'Sebastian Hof',
            'HOME.JOB_TITLE': '软件工程师',
            'HOME.PLACE': '纽伦堡，德国',

            'DESIGN': '————',
            'DEVELOPMENT': '————',
            'ANALYTICS': '————',


        });
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.preferredLanguage('en');
    })
    .controller('AppController', ['$router', '$translate', AppController]);

AppController.$routeConfig = [
    {path: '/', component: 'home'},
    {path: '/about', component: 'about'},
    {path: '/projects', component: 'projects'},
    {path: '/contact', component: 'contact'}
];
function AppController($router, $translate) {

    this.currentLang = 'EN';

    this.selectLang = function (lang) {
        this.currentLang = lang;
        if (lang == 'DE') $translate.use('de');
        else if (lang == 'CN') $translate.use('cn');
        else $translate.use('en');
    }

}


