import angular from 'angular';
import Header from './header/header';

let commonModule = angular.module('app.common', [
	Header
])
	
.name;

export default commonModule;