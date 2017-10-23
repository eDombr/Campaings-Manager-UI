import angular from 'angular';

let constantsModule = angular.module('app.constants', [])

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
    .constant('STATUS_CONFIG', {
        active: 'ACTIVE',
        inactive: 'INACTIVE'
    })
    .constant('BASE_URL', 'https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns')

    .name;

export default constantsModule;