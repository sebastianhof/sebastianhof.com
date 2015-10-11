angular.module('app', ['ngNewRouter'])
    .controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
    {path: '/', component: 'home'},
    {path: '/about/', component: 'about'},
    {path: '/projects/', component: 'projects'},
    {path: '/contact/', component: 'contact'}
];
function AppController($router) {
}


