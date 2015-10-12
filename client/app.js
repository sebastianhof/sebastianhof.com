angular.module('app', ['ngNewRouter', 'app.home', 'app.about', 'app.projects', 'app.contact'])
    .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
    {path: '/', component: 'home'},
    {path: '/about/', component: 'about'},
    {path: '/projects/', component: 'projects'},
    {path: '/contact/', component: 'contact'}
];
function AppController($router) {
}


