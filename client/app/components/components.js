import angular from 'angular';
import CampaignStats from './campaign-stats/campaign-stats';
import CampaignsList from './campaigns-list/campaigns-list';


let componentModule = angular.module('app.components', [
        CampaignStats,
        CampaignsList
    ])
    .name;

export default componentModule;
