import angular from 'angular';
import CampaignStatsModule from './campaign-stats/campaign-stats.module';
import CampaignsListModule from './campaigns-list/campaigns-list.module';


let componentModule = angular.module('app.components', [
        CampaignStatsModule,
        CampaignsListModule
    ])

    .name;

export default componentModule;
