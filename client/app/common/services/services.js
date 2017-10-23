import angular from 'angular';
import 'angular-ui-notification/dist/angular-ui-notification.min.css';
import CampaignService from './campaign/campaign';
import notification from 'angular-ui-notification';
import httpInterceptor from './httpInterceptor/httpInterceptor';

let servicesModule = angular.module('app.services', [
        CampaignService,
        notification,
        httpInterceptor
    ])

    .name;

export default servicesModule;
