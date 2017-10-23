import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
        uiRouter,
        Common,
        Components
    ])
    .config(($locationProvider, $httpProvider) => {
        "ngInject";

        $httpProvider.interceptors.push('HttpInterceptor');

        $locationProvider.html5Mode(true);
    })

    .component('app', AppComponent);
