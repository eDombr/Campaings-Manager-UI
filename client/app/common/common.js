import angular from 'angular';
import Header from './header/header';
import Constants from './constants';
import Services from './services/services';

let commonModule = angular.module('app.common', [
				Header,
				Constants,
				Services
    ])

    .name;

export default commonModule;
