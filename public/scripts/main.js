require.config({
    baseUrl: 'scripts/lib',
    paths :{
        'app' : '../app/app',
        'controllers' : '../app/controllers',
        'services' : '../app/services',
        'angular' :'angular/angular.min',
        'angularRoute' : 'angular-route/angular-route.min',
        'angularLocalStorage' : 'angular-local-storage/angular-local-storage.min',
        'cryptojs' : 'cryptojs/lib/PBKDF2',
        'jquery' : 'jquery/dist/jquery.min',
        'noty': 'noty/js/noty/jquery.noty',
        'noty.themes.default': 'noty/js/noty/themes/default',
        'noty.layouts.top': 'noty/js/noty/layouts/top',
        'bootstrap' : 'bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute' :{
            deps: ['angular'],
            exports : 'angularRoute'
        },
        'angularLocalStorage' :{
            deps: ['angular'],
            exports : 'angularLocalStorage'
        },
        'cryptojs' : {
            exports : 'cryptojs'
        },
        'noty': ['jquery'],
        'noty.themes.default': {
            deps: ['jquery', 'noty'],
            exports: 'jquery'
        },
        'noty.layouts.top': {
            deps: ['jquery', 'noty'],
            exports: 'jquery'
        },
        'bootstrap' : ['jquery']
    }
});


require(['require','angular','angularRoute','angularLocalStorage','cryptojs','noty',
    'noty.themes.default','noty.layouts.top','bootstrap','app'], function () {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['mainApp']);
    });
});