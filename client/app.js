angular.module('app', ['ngNewRouter', 'ngSanitize', 'pascalprecht.translate', 'app.home', 'app.about', 'app.projects', 'app.contact'])
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            'HOME': 'Home',
            'ABOUT': 'About',
            'PROJECTS': 'Projects',
            'CONTACT': 'Contact',

            'HOME.WELCOME': 'Hi, I am',
            'HOME.NAME': 'Sebastian Hof',
            'HOME.JOB_TITLE': 'Software Engineer',
            'HOME.PLACE': 'Nuremberg, Germany',

            'SERVICES': 'Software engineering services',

            'DESIGN': 'Design',
            'DESIGN_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'DEVELOPMENT': 'Development',
            'DEVELOPMENT_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ANALYTICS': 'Analytics',
            'ANALYTICS_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'FRAMEWORKS_TECHNOLOGIES': 'Frameworks and Technologies',

            'ANGULAR_TEXT': '',
            'NODEJS_TEXT': '',
            'PLAY_TEXT': '',
            'IOS_TEXT': '',
            'JAVAEE_TEXT': '',
            'ASPNET_TEXT': '',
            'MONGO_TEXT': '',
            'SPARK_TEXT': '',

            'JOB': 'Job',
            'EDUCATION': 'Education',
            'RESEARCH': 'Research',

            'ABOUT.OVERVIEW': 'Overview',
            'ABOUT.JOB': 'Software Engineer and Architect',
            'ABOUT.JOB_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.EDUCATION': 'International Information Systems M.Sc.',
            'ABOUT.EDUCATION_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.RESEARCH': 'Process Analytics and Mining',
            'ABOUT.RESEARCH_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',

            'ABOUT.RESUME': 'Resume',


            'ABOUT.INTERESTS': 'Interests',
            'FITNESS': 'Fitness',
            'TRAVEL': 'Travel',
            'PHOTOGRAPHY': 'Photography',
            'COOKING': 'Cooking',

            'CV': 'Curriculum Vitae',

            'PROJECTS.CLIENT': 'Client',
            'PROJECTS.DATE': 'Date',
            'PROJECTS.SERVICE': 'Service',
            'PROJECTS.TECHNOLOGIES': 'Technologies',
            'PROJECTS.CLOSE': 'Close',

            'PROJECTS.INBITS': 'INBITS Platform',
            'PROJECTS.INBITS_TEXT': 'INBITS Platform integrates various business solutions. It offers tools for collecting and developing ideas, trends, technologies. It provides tools for breaking down business strategies into concrete projects. It gives instruments for managing unpredictable and knowledge-intensive business processes. It provides tools for managing and enhancing personal goals. It offers a suite for connecting cyber-physical devices, and it integrates a platform for analyzing and mining of agile business processes.',
            'PROJECTS.INBITS_CLIENT': 'INBITS GmbH',
            'PROJECTS.INBITS_DATE': 'Current',
            'PROJECTS.INBITS_SERVICE': 'Cloud platform development',
            'PROJECTS.INBITS_TECHNOLOGIES': 'MEAN Stack, Play, Apache Spark',

            'PROJECTS.COCAMA': 'Collaborative Case Management',
            'PROJECTS.COCAMA_TEXT': 'Collaborative Case Management (CoCaMa) is an adaptive case management platform for managing highly flexible and unpredictable business processes and projects. It provides collaboration tools for supporting knowledge workers in achieving their case goals.',
            'PROJECTS.COCAMA_CLIENT': 'INBITS GmbH',
            'PROJECTS.COCAMA_DATE': '2012-2014',
            'PROJECTS.COCAMA_SERVICE': 'Web platform development',
            'PROJECTS.COCAMA_TECHNOLOGIES': 'Java EE, GWT, MySQL',

            'PROJECTS.SYMBIO': 'Symbio Web',
            'PROJECTS.SYMBIO_TEXT': 'Symbio web is a cloud-based business process management system. With Symbio, business process architect can design and document the process architecture of their organization, process editors can model detailed BPMN and EPC processes, and process stakeholders can access released processes for reference purposes.',
            'PROJECTS.SYMBIO_CLIENT': 'Ploetz + Zeller GmbH',
            'PROJECTS.SYMBIO_DATE': 'Current',
            'PROJECTS.SYMBIO_SERVICE': 'Web platform development',
            'PROJECTS.SYMBIO_TECHNOLOGIES': 'ASP.NET MVC, AngularJS, jQuery',

            'PROJECTS.COUBR': 'Coubr',
            'PROJECTS.COUBR_TEXT': 'Coubr wants to bring gastronomy owners and guests together. Restaurant owner can offer coupons, loyalty stamps, and other stamps to their customers on a easy-to-use cloud platform. Customers can explore and use those offers on their smart phone.',
            'PROJECTS.COUBR_CLIENT': 'Coubr',
            'PROJECTS.COUBR_DATE': '2014',
            'PROJECTS.COUBR_SERVICE': 'Cloud platform and mobile app development',
            'PROJECTS.COUBR_TECHNOLOGIES': 'MEAN Stack, iOS',

            'PROJECTS.HOMEPAGE': 'Homepage',
            'PROJECTS.HOMEPAGE_TEXT': 'sebastianhof.com is the personal homepage of Sebastian Hof. It informs you about me, my services, and my projects. Feel free to get in touch with me using the contact form.',
            'PROJECTS.HOMEPAGE_CLIENT': 'sebastianhof.com',
            'PROJECTS.HOMEPAGE_DATE': '2015',
            'PROJECTS.HOMEPAGE_SERVICE': 'Web page development',
            'PROJECTS.HOMEPAGE_TECHNOLOGIES': 'MEAN Stack',

            'SOCIAL_MEDIA': 'Social media',
            'CONTACT.ME': 'Contact me',
            'CONTACT.FORM': 'Use contact form',
            'CONTACT.NAME': 'Name',
            'CONTACT.FILL_IN': 'Please fill the contact form',
            'CONTACT.NAME_TEXT': 'Please enter your name.',
            'CONTACT.EMAIL': 'Email address',
            'CONTACT.EMAIL_TEXT': 'Please enter your email address.',
            'CONTACT.VALID_EMAIL_TEXT': 'Please enter a valid email address.',
            'CONTACT.MESSAGE': 'Message',
            'CONTACT.MESSAGE_TEXT': 'Please enter a message.',
            'CONTACT.SEND': 'Send',
            'CONTACT.ERROR': 'Could not send message. Please try again.',
            'CONTACT.SUCCESS': 'Message sent.',
            'GERMANY': "Germany"

        });
        $translateProvider.translations('de', {
            'ABOUT': 'Über mich',
            'PROJECTS': 'Projekte',
            'CONTACT': 'Kontakt',

            'HOME.NAME': 'Sebastian Hof',
            'HOME.JOB_TITLE': 'Software Engineer',
            'HOME.PLACE': 'Nürnberg',

            'SERVICES': 'Services',

            'DESIGN': 'Design',
            'DESIGN_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'DEVELOPMENT': 'Entwicklung',
            'DEVELOPMENT_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ANALYTICS': 'Analytics',
            'ANALYTICS_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'FRAMEWORKS_TECHNOLOGIES': 'Frameworks und Technologien',

            'JOB': 'Arbeit',
            'EDUCATION': 'Ausbildung',
            'RESEARCH': 'Forschung',

            'ABOUT.JOB': 'Software Engineer und Architekt',
            'ABOUT.JOB_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.EDUCATION': 'International Information Systems M.Sc.',
            'ABOUT.EDUCATION_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.RESEARCH': 'Prozessanalyse und -mining',
            'ABOUT.RESEARCH_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',

            'ABOUT.FITNESS': 'Fitness',
            'ABOUT.FITNESS_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.TRAVEL': 'Reisen',
            'ABOUT.TRAVEL_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ABOUT.COOKING': 'Kochen',
            'ABOUT.COOKING_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',

            'CV': 'Lebenslauf',

            'PROJECTS.CLIENT': 'Kunde',
            'PROJECTS.DATE': 'Datum',
            'PROJECTS.SERVICE': 'Dienstleistung',
            'PROJECTS.TECHNOLOGIES': 'Technologien',
            'PROJECTS.CLOSE': 'Schließen',

            'PROJECTS.INBITS': 'INBITS Platform',
            'PROJECTS.INBITS_TEXT': 'INBITS Platform integrates various business solutions. It offers tools for collecting and developing ideas, trends, technologies. It provides tools for breaking down business strategies into concrete projects. It gives instruments for managing unpredictable and knowledge-intensive business processes. It provides tools for managing and enhancing personal goals. It offers a suite for connecting cyber-physical devices, and it integrates a platform for analyzing and mining of agile business processes.',
            'PROJECTS.INBITS_CLIENT': 'INBITS GmbH',
            'PROJECTS.INBITS_DATE': 'Aktuell',
            'PROJECTS.INBITS_SERVICE': 'Cloudplattformentwicklung',
            'PROJECTS.INBITS_TECHNOLOGIES': 'MEAN Stack, Play, Apache Spark',

            'PROJECTS.COCAMA': 'Collaborative Case Management',
            'PROJECTS.COCAMA_TEXT': 'Collaborative Case Management (CoCaMa) is an adaptive case management platform for managing highly flexible and unpredictable business processes and projects. It provides collaboration tools for supporting knowledge workers in achieving their case goals.',
            'PROJECTS.COCAMA_CLIENT': 'INBITS GmbH',
            'PROJECTS.COCAMA_DATE': '2012-2014',
            'PROJECTS.COCAMA_SERVICE': 'Webplattformentwicklung',
            'PROJECTS.COCAMA_TECHNOLOGIES': 'Java EE, GWT, MySQL',

            'PROJECTS.SYMBIO': 'Symbio Web',
            'PROJECTS.SYMBIO_TEXT': 'Symbio web is a cloud-based business process management system. With Symbio, business process architect can design and document the process architecture of their organization, process editors can model detailed BPMN and EPC processes, and process stakeholders can access released processes for reference purposes.',
            'PROJECTS.SYMBIO_CLIENT': 'Ploetz + Zeller GmbH',
            'PROJECTS.SYMBIO_DATE': 'Aktuell',
            'PROJECTS.SYMBIO_SERVICE': 'Webplattformentwicklung',
            'PROJECTS.SYMBIO_TECHNOLOGIES': 'ASP.NET MVC, AngularJS, jQuery',

            'PROJECTS.COUBR': 'Coubr',
            'PROJECTS.COUBR_TEXT': 'Coubr wants to bring gastronomy owners and guests together. Restaurant owner can offer coupons, loyalty stamps, and other stamps to their customers on a easy-to-use cloud platform. Customers can explore and use those offers on their smart phone.',
            'PROJECTS.COUBR_CLIENT': 'Coubr',
            'PROJECTS.COUBR_DATE': '2014',
            'PROJECTS.COUBR_SERVICE': 'Cloudplattform und mobile Anwendungsentwicklung',
            'PROJECTS.COUBR_TECHNOLOGIES': 'MEAN Stack, iOS',

            'PROJECTS.HOMEPAGE': 'Homepage',
            'PROJECTS.HOMEPAGE_TEXT': 'sebastianhof.com is the personal homepage of Sebastian Hof. It informs you about me, my services, and my projects. Feel free to get in touch with me using the contact form.',
            'PROJECTS.HOMEPAGE_CLIENT': 'sebastianhof.com',
            'PROJECTS.HOMEPAGE_DATE': '2015',
            'PROJECTS.HOMEPAGE_SERVICE': 'Webseitenentwicklung',
            'PROJECTS.HOMEPAGE_TECHNOLOGIES': 'MEAN Stack',

            'CONTACT.NAME': 'Name',
            'CONTACT.NAME_TEXT': 'Bitte geben Sie Ihren Namen ein.',
            'CONTACT.EMAIL': 'E-Mail-Adresse',
            'CONTACT.EMAIL_TEXT': 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
            'CONTACT.MESSAGE': 'Nachricht',
            'CONTACT.MESSAGE_TEXT': 'Bitte geben Sie Ihre Nachricht ein.',
            'CONTACT.SEND': 'Senden',
            'CONTACT.ERROR': 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es nochmal.',
            'CONTACT.SUCCESS': 'Nachricht versendet.'

        });
        $translateProvider.translations('zh-CN', {
            'ABOUT': '关于我的',
            'PROJECTS': '工程',
            'CONTACT': '联系',


            'HOME.NAME': 'Sebastian Hof',
            'HOME.JOB_TITLE': '软件工程师',
            'HOME.PLACE': '纽伦堡，德国',

            'DESIGN': 'Design',
            'DESIGN_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'DEVELOPMENT': 'Development',
            'DEVELOPMENT_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'ANALYTICS': 'Analytics',
            'ANALYTICS_TEXT': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            'FRAMEWORKS_TECHNOLOGIES': 'Frameworks and Technologies',

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
            'PROJECTS.INBITS_TEXT': 'INBITS Platform integrates various business solutions. It offers tools for collecting and developing ideas, trends, technologies. It provides tools for breaking down business strategies into concrete projects. It gives instruments for managing unpredictable and knowledge-intensive business processes. It provides tools for managing and enhancing personal goals. It offers a suite for connecting cyber-physical devices, and it integrates a platform for analyzing and mining of agile business processes.',
            'PROJECTS.INBITS_CLIENT': 'INBITS GmbH',
            'PROJECTS.INBITS_DATE': 'Current',
            'PROJECTS.INBITS_SERVICE': 'Cloud platform development',
            'PROJECTS.INBITS_TECHNOLOGIES': 'MEAN Stack, Play, Apache Spark',

            'PROJECTS.COCAMA': 'Collaborative Case Management',
            'PROJECTS.COCAMA_TEXT': 'Collaborative Case Management (CoCaMa) is an adaptive case management platform for managing highly flexible and unpredictable business processes and projects. It provides collaboration tools for supporting knowledge workers in achieving their case goals.',
            'PROJECTS.COCAMA_CLIENT': 'INBITS GmbH',
            'PROJECTS.COCAMA_DATE': '2012-2014',
            'PROJECTS.COCAMA_SERVICE': 'Web platform development',
            'PROJECTS.COCAMA_TECHNOLOGIES': 'Java EE, GWT, MySQL',

            'PROJECTS.SYMBIO': 'Symbio Web',
            'PROJECTS.SYMBIO_TEXT': 'Symbio web is a cloud-based business process management system. With Symbio, business process architect can design and document the process architecture of their organization, process editors can model detailed BPMN and EPC processes, and process stakeholders can access released processes for reference purposes.',
            'PROJECTS.SYMBIO_CLIENT': 'Ploetz + Zeller GmbH',
            'PROJECTS.SYMBIO_DATE': 'Current',
            'PROJECTS.SYMBIO_SERVICE': 'Web platform development',
            'PROJECTS.SYMBIO_TECHNOLOGIES': 'ASP.NET MVC, AngularJS, jQuery',

            'PROJECTS.COUBR': 'Coubr',
            'PROJECTS.COUBR_TEXT': 'Coubr wants to bring gastronomy owners and guests together. Restaurant owner can offer coupons, loyalty stamps, and other stamps to their customers on a easy-to-use cloud platform. Customers can explore and use those offers on their smart phone.',
            'PROJECTS.COUBR_CLIENT': 'Coubr',
            'PROJECTS.COUBR_DATE': '2014',
            'PROJECTS.COUBR_SERVICE': 'Cloud platform and mobile app development',
            'PROJECTS.COUBR_TECHNOLOGIES': 'MEAN Stack, iOS',

            'PROJECTS.HOMEPAGE': 'Homepage',
            'PROJECTS.HOMEPAGE_TEXT': 'sebastianhof.com is the personal homepage of Sebastian Hof. It informs you about me, my services, and my projects. Feel free to get in touch with me using the contact form.',
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
            'CONTACT.SEND': 'Send',
            'CONTACT.ERROR': 'Could not send message. Please try again.',
            'CONTACT.SUCCESS': 'Message sent.'


        });
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage('en');
    })
    .controller('AppController', ['$router', '$translate', '$rootScope', AppController])
    .directive('loadTemplate', function() {
        return {
            link: function(scope, elem) {
                Mi.init();
            }
        };
    });

AppController.$routeConfig = [
    {path: '/', component: 'home'},
    {path: '/about', component: 'about'},
    {path: '/projects', component: 'projects'},
    {path: '/contact', component: 'contact'}
];
function AppController($router, $translate, $rootScope) {

    this.currentLang = 'EN';

    this.selectLang = function (lang) {
        this.currentLang = lang;
        if (lang == 'DE') $translate.use('de');
        else if (lang == 'CN') $translate.use('zh-CN');
        else $translate.use('en');
    };

}



