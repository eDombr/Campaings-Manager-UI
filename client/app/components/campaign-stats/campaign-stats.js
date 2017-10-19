import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import campaignStatsComponent from './campaign-stats.component';

let campaignStatsModule = angular.module('app.campaign-stats', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('campaign-stats', {
      url: '/campaign-stats/:campaignId',
      component: 'campaignStats'
    });
})

.component('campaignStats', campaignStatsComponent)
  
.name;

export default campaignStatsModule;