import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import HeaderComponent from './header.component';

const HeaderModule = angular.module('header', [
        uiRouter
    ])

    .component('header', HeaderComponent)

    .name;

export default HeaderModule;
