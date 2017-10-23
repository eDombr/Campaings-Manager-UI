import angular from 'angular';
import CampaignService from './campaign/campaign';
import httpInterceptor from './httpInterceptor/httpInterceptor';

let servicesModule = angular.module('app.services', [
        CampaignService,
        httpInterceptor
    ])

    .name;

export default servicesModule;
