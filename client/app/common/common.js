import angular from 'angular';
import Header from './header/header';
import Constants from './constants';

let commonModule = angular.module('app.common', [
				Header,
				Constants
    ])

    .name;

export default commonModule;
