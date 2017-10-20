import angular from 'angular';
import CampaignService from './campaign/campaign';
import notification from 'angular-ui-notification';
import 'angular-ui-notification/dist/angular-ui-notification.min.css';

let servicesModule = angular.module('app.services', [
        CampaignService,
        notification
    ])

    .name;

export default servicesModule;
