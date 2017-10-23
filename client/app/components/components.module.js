import angular from 'angular';
import CampaignStatsModule from './campaign-stats/campaign-stats.module';
import CampaignsListModule from './campaigns-list/campaigns-list.module';


const ComponentModule = angular.module('app.components', [
        CampaignStatsModule,
        CampaignsListModule
    ])

    .name;

export default ComponentModule;
