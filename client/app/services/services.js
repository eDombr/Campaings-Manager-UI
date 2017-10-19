import angular from 'angular';
import CampaignService from './campaign/campaign';

let servicesModule = angular.module('app.services', [
    CampaignService
])
  
.name;

export default servicesModule;