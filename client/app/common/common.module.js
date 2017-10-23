import angular from 'angular';
import HeaderModule from './header/header.module';
import ConstantsModule from './constants.module';
import ServicesModule from './services/services.module';

const commonModule = angular.module('app.common', [
		HeaderModule,
		ConstantsModule,
		ServicesModule
    ])

    .name;

export default commonModule;
