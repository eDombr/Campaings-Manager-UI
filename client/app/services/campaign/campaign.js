import angular from 'angular';
import CampaignService from './campaign.service';

let CampaignModule = angular.module('app.campaign', [])

    .service('Campaign', CampaignService)

    .name;

export default CampaignModule;
