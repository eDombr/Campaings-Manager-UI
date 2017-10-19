import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import campaignsListComponent from './campaigns-list.component';

let campaignsListModule = angular.module('app.Campaigns-list', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('campaigns-list', {
      url: '/',
      component: 'campaignsList'
    });
})

.component('campaignsList', campaignsListComponent)
  
.name;

export default campaignsListModule;