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

    .name;

export default constantsModule;