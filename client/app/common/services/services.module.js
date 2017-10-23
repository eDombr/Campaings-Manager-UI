import angular from 'angular';
import CampaignModule from './campaign/campaign.module';
import httpModule from './http/http.module';

let servicesModule = angular.module('app.services', [
        CampaignModule,
        httpModule
    ])

    .name;

export default servicesModule;
