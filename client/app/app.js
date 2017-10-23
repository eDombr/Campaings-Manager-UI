import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import CommonModule from './common/common.module';
import ComponentsModule from './components/components.module';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
        uiRouter,
        CommonModule,
        ComponentsModule
    ])
    .config(($locationProvider, $httpProvider) => {
        "ngInject";

        $httpProvider.interceptors.push('HttpInterceptor');

        $locationProvider.html5Mode(true);
    })

    .component('app', AppComponent);
