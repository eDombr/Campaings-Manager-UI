import angular from 'angular';

let constantsModule = angular.module('app.constants', [])
    // CHART_CONFIG - constant for a default view of a chart from 'hightcharts.js' library
    .constant('CHART_CONFIG', {
        chart: {
            type: 'spline'
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'Impressions'
            }
        },
        series: [{
            name: 'Impression',
            data: []
        }],
        title: {
            text: false
        },
        legend: {
            enabled: false
        },
        credits: false
    })
    // STATUS_CONFIG - variants of campaign status
    .constant('CAMPAIGN_STATUSES', {
        active: 'ACTIVE',
        inactive: 'INACTIVE'
    })
    // API_URL - basic API url, which is used for all HTTP requests
    .constant('API_URL', 'https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns')

    .name;

export default constantsModule;