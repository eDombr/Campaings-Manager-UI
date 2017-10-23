import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import CampaignsListComponent from './campaigns-list.component';

const CampaignsListModule = angular.module('app.campaigns-list', [
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

    .component('campaignsList', CampaignsListComponent)

    .name;

export default CampaignsListModule;
