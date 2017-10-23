import angular from 'angular';
import CampaignModule from './campaign/campaign.module';
import HttpModule from './http/http.module';

const ServicesModule = angular.module('app.services', [
        CampaignModule,
        HttpModule
    ])

    .name;

export default ServicesModule;
