import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import CampaignStatsComponent from './campaign-stats.component';
import highcharts from 'highcharts-ng';
import 'highcharts-ng/dist/highcharts-ng.css';

const CampaignStatsModule = angular.module('app.campaign-stats', [
        uiRouter,
        highcharts,
    ])

    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('campaign-stats', {
                url: '/campaign-stats/:campaignId',
                component: 'campaignStats'
            });
    })

    .component('campaignStats', CampaignStatsComponent)

    .name;

export default CampaignStatsModule;
